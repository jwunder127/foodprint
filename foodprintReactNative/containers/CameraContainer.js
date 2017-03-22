'use strict';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { ListItem, Button, Content } from 'native-base';
import { RNS3 } from 'react-native-aws3';
import CheckBox from 'react-native-check-box';
import ImagePicker from 'react-native-image-picker';
import Clarifai from 'clarifai';

import { AWSOptions, clarifaiKeys } from '../secrets';
import CameraView from '../components/Camera';
import { getNutrition, mealImageUrlAdd } from '../reducers/camera';


const CLIENT_ID = clarifaiKeys.CLIENT_ID;
const CLIENT_SECRET = clarifaiKeys.CLIENT_SECRET;
const app = new Clarifai.App(CLIENT_ID, CLIENT_SECRET)

class CameraContainer extends Component {
  constructor(props){
    super(props)
    this.tagsToSend = []
    this.state = {
      tagText: [],
      mealPhotoUrl: ''
    };

    this.handleCheckedBox = this.handleCheckedBox.bind(this);
    this.handleSubmitFood = this.handleSubmitFood.bind(this);
    this.renderClarifaiResponse = this.renderClarifaiResponse.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this.sendToAWS = this.sendToAWS.bind(this);
  }

  handleCheckedBox(tagName){
    console.log('before tagsToSend is:', this.tagsToSend)
    const tagIndex = this.tagsToSend.indexOf(tagName)
    const pushOrRemove = (tagIndex === -1) ?
      this.tagsToSend.push(tagName) :
      this.tagsToSend.splice(tagIndex, 1)
    console.log('after tagsToSend is:', this.tagsToSend)
  }

  handleSubmitFood(){
    //make sure the photo is loaded (necessary for later)
    if (this.state.mealPhotoUrl){
      this.props.sendToNutrition(this.tagsToSend)
    } else {
      console.log('aws not ready yet')
    }
  }

  renderClarifaiResponse(tagText){
    return (
      <Content>
        <Text>Select the foods that best match your meal</Text>
        <Button block info onPress={this.selectImage}><Text>Select new image</Text></Button>
      {tagText.map(tag => (
                <ListItem key={tag.id}>
                  <CheckBox onClick={() => this.handleCheckedBox(tag.name)} />
                  <Text>{tag.name}</Text>
                </ListItem>
                ))}
        <Button block success onPress={this.handleSubmitFood}><Text>Submit for nutrition info</Text></Button>
      </Content>
    )
  }

  selectImage() {
    if (this.state.tagText.length) {
      this.setState({
        tagText: []
      })
    }

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
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        console.log('Image selected')
        this.setState({imageSource: response.uri.replace('file://', '')});
        app.models.predict(Clarifai.FOOD_MODEL, {base64: response.data}).then(
        (res) => {
          console.log('Clarifai response = ', res);
          let tags = [];
          for (let i = 0; i < res.data.outputs[0].data.concepts.length; i++) {
            tags.push({id: i + 1, name: res.data.outputs[0].data.concepts[i].name});
          }
          this.setState({tagText: tags});
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
      console.log('aws response:', response)
      this.setState({mealPhotoUrl: response.headers.Location})
      this.props.addMealImageUrl(response.headers.Location)
    })
    .catch((e) => {console.error('error on component',e)});
  }

  render() {
    console.log('rendered, state is:', this.state)
    return (
      <CameraView
        renderClarifaiResponse = {this.renderClarifaiResponse}
        selectImage = {this.selectImage}
        tagText = {this.state.tagText}
      />
    )}
}
const mapStateToProps = state => {
  console.log('state is', state)
  return {
    camera: state.camera
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addMealImageUrl(mealImageUrl) {
      dispatch(mealImageUrlAdd(mealImageUrl))
    },
    sendToNutrition(tags) {
      dispatch(getNutrition(tags))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CameraContainer)
