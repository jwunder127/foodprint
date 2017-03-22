'use strict';
import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import {Container, Header, ListItem, Button} from 'native-base';
import CheckBox from 'react-native-check-box';
import ImagePicker from 'react-native-image-picker';
import Clarifai from 'clarifai';

const options = {
  title: 'Select an Image',
  storageOptions: {
    skipBackup: true
  },
  maxWidth: 480
}

const CLIENT_ID = 'aFsZB-C68P7TC7W4h_jZQdM0FfzR808XlNWqbNLC';
const CLIENT_SECRET = 'zPrPS52OW56M5hi6JHuOR9QcVkvynNocgiXF56rW';
const app = new Clarifai.App(CLIENT_ID, CLIENT_SECRET)

export default class CameraView extends Component {
  constructor(props){
    super(props);
    this.tagsToSend = []

    this.state = {
      // imageSource:'https://community.clarifai.com/uploads/default/_emoji/clarifai.png',
      tagText: []
    };

    this.handleSubmitFood = this.handleSubmitFood.bind(this);
    this.selectImage = this.selectImage.bind(this);
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
    //dispatch action to send food to nutrition api
    //use this.tagsToSend as the argument
  }

  renderClarifaiResponse(tagText){
    return (
      <View>
        <Text>Select the foods that best match your meal</Text>
        <Button block success onPress={this.handleSubmitFood}><Text>Submit for nutrition info</Text></Button>
        <Button block info onPress={this.selectImage}><Text>Select new image</Text></Button>
      {tagText.map(tag => (
                <ListItem key={tag.id}>
                  <CheckBox onClick={() => this.handleCheckedBox(tag.name)} />
                  <Text>{tag.name}</Text>
                </ListItem>
                ))}
      </View>
    )
  }

  selectImage() {
    ImagePicker.showImagePicker(options, (response) => {
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
            console.log(`pushing: ${res.data.outputs[0].data.concepts[i].name}`)
            tags.push({id: i + 1, name: res.data.outputs[0].data.concepts[i].name});
          }
          this.setState({tagText: tags});

          },
          (error) => {
            console.log(error);
          });
                }
              })
            }

  render() {
    return (
            <Container>
              <Header />
              <View>
                <ScrollView>
                {this.state.tagText.length ?
                  this.renderClarifaiResponse(this.state.tagText) :
                <Button block info onPress={this.selectImage}><Text>Select an image</Text></Button>
                }
                </ScrollView>
              </View>
            </Container>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: 200,
    height: 200
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
