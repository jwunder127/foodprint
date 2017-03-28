'use strict';
import React from 'react';
import { Text, View } from 'react-native';
import { Container, Button, Footer } from 'native-base';


const CameraView = (props) => {
    return (
      <Container style={{flex: 1, justifyContent: 'center'}} >
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
    </Container>)
}

export default CameraView;

