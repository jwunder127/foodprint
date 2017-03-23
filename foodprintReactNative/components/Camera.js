'use strict';
import React from 'react';
import { Text } from 'react-native';
import {Container, Button} from 'native-base';

const CameraView = (props) => {
    return (
      <Container>
        {
          props.foodTags.length ?
          props.renderClarifaiResponse(props.foodTags) :
          <Button block info onPress={props.selectImage}>
            <Text>
              Select an image
            </Text>
          </Button>
        }
      </Container>)
}

export default CameraView;
