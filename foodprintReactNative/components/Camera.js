'use strict';
import React from 'react';
import { Text, Image, View } from 'react-native';
import {Container, Button, Footer, Content} from 'native-base';

const saladImg = 'http://www.saladbarmn.com/assets/img/slider/2.jpg'

const CameraView = (props) => {
    console.log('props are:', props )
    return (
      <Image source={{uri: saladImg}} style={{flex: 1, justifyContent: 'center'}} >
        {
        props.foodTags.length ?
        props.renderClarifaiResponse(props.foodTags) :
        <View>
          <Text style={{backgroundColor: 'orange'}}>
          Welcome to Foodprint! Click 'Select and Image' to get started!
          </Text>
          <Button
              block
              info
              onPress={props.selectImage}>
            <Text>
              Select an image
            </Text>
          </Button>
        </View>
       }
      <Footer style={{opacity: 0}} />
    </Image>)
}

export default CameraView;

