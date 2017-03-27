'use strict';
import React from 'react';
import { Text, Image } from 'react-native';
import {Container, Button, Footer, Content} from 'native-base';



const CameraView = (props) => {
    return (
    <Container >
      <Content>
      {
        props.foodTags.length ?
        props.renderClarifaiResponse(props.foodTags) :
        <Button
            block
            info
            onPress={props.selectImage}>
          <Text>
            Select an image
          </Text>
        </Button>
       }
      </Content>
      <Footer style={{opacity: 0}} />
    </Container>)
}

export default CameraView;

