'use strict';
import React from 'react';
import { Text, View } from 'react-native';
import { Container, Button, Footer } from 'native-base';

const citrusYellow = '#F6E49C';
const citrusPink = '#FC8A67';
const citrusOrange = '#E88931';
const citrusGreen = '#84FF6F';

const styles = {
  container: {
    backgroundColor: citrusYellow,
    flex: 1,
    justifyContent: 'center',

  },
  welcomeText: {
    color: 'white',
    backgroundColor: citrusPink
  },
  selectImageButton: {
    marginLeft: 125,
    backgroundColor: citrusOrange
  },
  selectImageText: {
    color: 'white'
  }
}

const CameraView = (props) => {
    return (
      <Container style={styles.container} >
        {
        props.foodTags.length ?
        props.renderClarifaiResponse(props.foodTags) :
        <View>
          <Text style={styles.welcomeText}>
          Welcome to Foodprint! Click 'Select and Image' to get started!
          </Text>
          <Button
              onPress={props.selectImage}
              style={styles.selectImageButton}
              >
            <Text
              style={styles.selectImageText}
            >
              Select an image
            </Text>
          </Button>
        </View>
       }
      <Footer style={{opacity: 0}} />
    </Container>)
}

export default CameraView;
