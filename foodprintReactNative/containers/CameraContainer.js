'use strict';
import React, { Component } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardItem, Button, Grid, Col, Content, Container, Thumbnail, Spinner, Icon } from 'native-base';




import { RNS3 } from 'react-native-aws3';
import CheckBox from 'react-native-check-box';
import ImagePicker from 'react-native-image-picker';
import Clarifai from 'clarifai';
import Actions from 'react-native-router-flux';

import { getNutrientsValue } from '../reducers/mealThunks'

import { AWSOptions, clarifaiKeys } from '../secrets';
import CameraView from '../components/Camera';


const CLIENT_ID = clarifaiKeys.CLIENT_ID;
const CLIENT_SECRET = clarifaiKeys.CLIENT_SECRET;
const app = new Clarifai.App(CLIENT_ID, CLIENT_SECRET)

const citrusYellow = '#F6E49C';
const citrusPink = '#FC8A67';
const citrusOrange = '#E88931';
const citrusGreen = '#00A229';
const periwinkle = '#686CA6'
const styles = {
  card: {
    backgroundColor: citrusYellow,
  },
  cardItemText: {
    textAlign: 'left'
  },
  container: {
    backgroundColor: citrusYellow,
    flex: 1,
    justifyContent: 'center',

  },
  selectImageButton: {
    marginLeft: 125,
    backgroundColor: citrusOrange
  },
  selectImageText: {
    color: 'white'
  },
  welcomeText: {
    color: 'white',
    backgroundColor: citrusPink
  },
};


class CameraContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      foodTags: [],
      mealPhotoUrl: '',
      checkBoxTags: [],
      additionalTags: [],
      tagsToSend: []
    };

    this.handleCheckedBox = this.handleCheckedBox.bind(this);
    this.handleSubmitFood = this.handleSubmitFood.bind(this);
    this.handleAdditionalTags = this.handleAdditionalTags.bind(this);
    this.renderClarifaiResponse = this.renderClarifaiResponse.bind(this);
    this.renderMealImage = this.renderMealImage.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this.sendToAWS = this.sendToAWS.bind(this);
  }

  handleCheckedBox(tagName){
    const checkBoxTags = this.state.checkBoxTags;
    const tagIndex = checkBoxTags.indexOf(tagName);
    if (tagIndex === -1) {
      checkBoxTags.push(tagName)
    } else {
      checkBoxTags.splice(tagIndex, 1)
    }
    this.setState({
      checkBoxTags: checkBoxTags,
      tagsToSend: checkBoxTags.concat(this.state.additionalTags)
    })
  }

  handleSubmitFood(){
      this.props.loadMeal(this.state.tagsToSend, this.state.mealPhotoUrl)
  }

  handleAdditionalTags(text){
    const additionalTags = (text === '') ?
          [] : text.split(',')

    this.setState({
      additionalTags: additionalTags,
      tagsToSend: this.state.checkBoxTags.concat(additionalTags)
    });

  }

  renderClarifaiResponse(foodTags){

    return (
      <Container>
        <TouchableOpacity onPress={() => this.resetState()} style={{backgroundColor:citrusPink, height: 40}}>
            <Icon style={{color: '#505050', marginTop: 7, marginLeft: 10}} android="md-arrow-back" ios="ios-arrow-back">
              <Text style={{fontFamily: 'SpaceMono-Regular', textAlign: 'right', fontSize: 16, color: 'white'}}>       Select your tags!</Text>
            </Icon>
        </TouchableOpacity>
        <View >
            {this.renderMealImage()}
        </View>
        <Content>
          <Card>
            {foodTags.map(tag => (
              <CardItem key={tag.id} style={styles.card}>
                <CheckBox
                  onClick={() => this.handleCheckedBox(tag.name)}
                  rightText={tag.name}
                  rightTextStyle={styles.cardItemText}
                  style={{borderColor: 'white', flex: 1}}
                />
              </CardItem>
            ))}
          </Card>
        </Content>
        <View>
          <TextInput
            placeholder="Don't see your food? Add it here!"
            style={{ backgroundColor: citrusYellow, borderColor: '#505050', borderWidth: 1, fontFamily: 'SpaceMono-Regular', height: 35, textAlign: 'center'}}
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.handleAdditionalTags(text)}
            />
          <Text
            style={{backgroundColor: citrusYellow,
                    fontFamily: 'SpaceMono-Regular',
                    color: citrusPink,
                    minHeight: 35, marginLeft: 15, flexWrap: 'wrap'}}
          >
            Currently selected: {this.state.tagsToSend.join(' ')}
          </Text>
        </View>
          {this.renderSubmitButton()}
      </Container>
    )
  }

    renderMealImage(){
    if (this.state.mealPhotoUrl) {
      return (
       <Image style={{resizeMode: 'contain', marginTop: 0.5, height: 200}} source={{uri: this.state.mealPhotoUrl}} />)
    } else {
       return <Spinner />
    }
  }

  renderSubmitButton(){
    if (this.state.mealPhotoUrl !== '' && (this.state.tagsToSend.length || this.state.additionalTags.length)){
      return (
        <Button
          block
          style= {{backgroundColor: citrusGreen}}
         onPress={this.handleSubmitFood}><Text style={{color: 'white'}}>Submit for nutrition info</Text></Button>)
    } else {
      return (
        <Button block disabled><Text>Select foods to submit</Text></Button>)
    }
  }

  resetState(){
    this.setState({
      foodTags: [],
      mealPhotoUrl: '',
      checkBoxTags: [],
      additionalTags: [],
      tagsToSend: []
    })
  }

  selectImage() {
    this.resetState()

    const options = {
        title: 'Select an Image',
        storageOptions: {
          skipBackup: true
        },
        maxWidth: 480,
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
    camera: state.meal
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
