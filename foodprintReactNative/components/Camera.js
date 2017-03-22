'use strict';
import React from 'react';
import { Text } from 'react-native';
import {Container, Button} from 'native-base';

const CameraView = (props) => {
    return (
      <Container>
        {
          props.tagText.length ?
          props.renderClarifaiResponse(props.tagText) :
          <Button block info onPress={props.selectImage}>
            <Text>
              Select an image
            </Text>
          </Button>
        }
      </Container>)
}

export default CameraView;
