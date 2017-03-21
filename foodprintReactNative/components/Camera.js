'use strict';
import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import {Container, Header, Button, Icon} from 'native-base';
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
    this.selectImage = this.selectImage.bind(this);
    this.state = {
      imageSource:'https://community.clarifai.com/uploads/default/_emoji/clarifai.png',
      tagText: ''
    };
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
        app.models.predict(Clarifai.FOOD_MODEL, {base64:response.data}).then(
        (res) => {
          console.log('Clarifai response = ', res);
          let tags = '';
          for (let i = 0; i<res.data.outputs[0].data.concepts.length; i++) {
            tags += res.data.outputs[0].data.concepts[i].name + ' ';
          }
          this.setState({tagText:tags});

          },
          (error)=>{
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
                <TouchableHighlight onPress={this.selectImage}>
                  <Text>Select an image</Text>
                </TouchableHighlight>
                <Image source={{uri: this.state.imageSource}} style={styles.image} />
                <Text>{this.state.tagText}</Text>
              </View>
            </Container>)
  }
}


// export default class CameraView extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Camera
//           ref={(cam) => {
//             this.camera = cam;
//           }}
//           style={styles.preview}
//           aspect={Camera.constants.Aspect.fill}>
//           <View style={styles.preview}>
//             <Button onPress={this.pictureWrapper.bind(this)}><Icon name="camera" /></Button>
//           </View>
//         </Camera>
//       </View>
//     );
//   }

//   takePicture() {
//     this.camera.capture()
//       .then((data) => {
//         console.log(data)
//         return data
//       })
//       .catch(err => console.error(err));
//   }

//   pictureWrapper() {
//     const takingPhoto = this.takePicture()
//     Promise.all(takingPhoto)
//       .then(photo => console.log(photo))
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: 200,
    height:200
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
