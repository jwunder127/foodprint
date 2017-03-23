'use strict';
import React, { Component } from 'react';
import { Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { ListItem, Button, Container, Content } from 'native-base';
import { RNS3 } from 'react-native-aws3';
import CheckBox from 'react-native-check-box';
import ImagePicker from 'react-native-image-picker';
import Clarifai from 'clarifai';

import { getNutrientsValue } from '../reducers/camera'

import { AWSOptions, clarifaiKeys } from '../secrets';
import CameraView from '../components/Camera';



const CLIENT_ID = clarifaiKeys.CLIENT_ID;
const CLIENT_SECRET = clarifaiKeys.CLIENT_SECRET;
const app = new Clarifai.App(CLIENT_ID, CLIENT_SECRET)

class CameraContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      foodTags: [],
      mealPhotoUrl: '',
      tagsToSend: []
    };

    this.handleCheckedBox = this.handleCheckedBox.bind(this);
    this.handleSubmitFood = this.handleSubmitFood.bind(this);
    this.renderClarifaiResponse = this.renderClarifaiResponse.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this.sendToAWS = this.sendToAWS.bind(this);
  }

  handleCheckedBox(tagName){
    const tagsToSend = this.state.tagsToSend;
    const tagIndex = tagsToSend.indexOf(tagName)
    const pushOrRemove = (tagIndex === -1) ?
      tagsToSend.push(tagName) :
      tagsToSend.splice(tagIndex, 1)
    this.setState({tagsToSend: tagsToSend})
  }

  handleSubmitFood(){
      this.props.loadMeal(this.state.tagsToSend, this.state.mealPhotoUrl)
  }

  renderClarifaiResponse(foodTags){

    return (
      <Content>
        <Text>Select the foods that best match your meal</Text>
        <Button block info onPress={this.selectImage}><Text>Select new image</Text></Button>
        <Text>Currently selected: {this.state.tagsToSend.join(' ')}</Text>
          {foodTags.map(tag => (
              <ListItem key={tag.id}>
                <CheckBox
                  onClick={() => this.handleCheckedBox(tag.name)}
                />
                <Text>{tag.name}</Text>
              </ListItem>
              ))}
          {this.renderSubmitButton()}
      </Content>
    )
  }

  renderSubmitButton(){
    if (this.state.mealPhotoUrl !== '' && this.state.tagsToSend.length){
      return (
        <Button block success onPress={this.handleSubmitFood}><Text>Submit for nutrition info</Text></Button>)
    } else {
      return (
        <Button block disabled><Text>Select foods to submit</Text></Button>)
    }
  }

  selectImage() {
    this.setState({
      foodTags: [],
      mealPhotoUrl: '',
      tagsToSend: []
    })

    const options = {
        title: 'Select an Image',
        storageOptions: {
          skipBackup: true
        },
        maxWidth: 480
      }

    ImagePicker.showImagePicker(options, (response) => {
      const photoUri = response.uri;
      const fileName = response.fileName;
      const fileType = response.type;


      if (response.didCancel) {
          console.log('User cancelled image picker');
      } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
      }
      else {
        this.setState({imageSource: response.uri.replace('file://', '')});
        app.models.predict(Clarifai.FOOD_MODEL, {base64: response.data}).then(
        (res) => {
          let tags = [];
          for (let i = 0; i < res.data.outputs[0].data.concepts.length; i++) {
            tags.push({id: i + 1, name: res.data.outputs[0].data.concepts[i].name});
          }
          this.setState({foodTags: tags});
          this.sendToAWS(photoUri, fileName, fileType)
          },
          (error) => {
            console.log(error);
          });
      }
    })
  }

  sendToAWS(uri, name, type){

    let file = {
    // `uri` can also be a file system path (i.e. file://)
      uri: uri,
      name: name,
      type: type
    }
    let options = AWSOptions;

    RNS3.put(file, options)
    .then(response => {
      if (response.status !== 201) {
        throw new Error('Failed to upload image to S3');
      }
      this.setState({mealPhotoUrl: response.headers.Location})
    })
    .catch((e) => {console.error('error on component',e)});
  }

  render() {
    return (
      <CameraView
        renderClarifaiResponse = {this.renderClarifaiResponse}
        selectImage = {this.selectImage}
        foodTags = {this.state.foodTags}
      />
    )}
}
const mapStateToProps = state => {
  return {
    camera: state.camera
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loadMeal(tags, photoUrl) {
      dispatch(getNutrientsValue(tags, photoUrl))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraContainer)
