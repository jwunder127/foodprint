'use strict';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Container, Header, Button, Footer, Grid, Col, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

const citrusYellow = '#F6E49C';
const citrusPink = '#FC8A67';
const citrusOrange = '#E88931';
const citrusGreen = '#84FF6F';

const styles = {
  container: {
    backgroundColor: '#f6e49c',
    flex: 1,
    flexWrap: 'wrap',
  },
  headline: {
    marginTop: 50,
    marginLeft: 90,
    color: '#505050',
    fontSize: 25,
    fontFamily: 'SpaceMono-Bold'
  },
  headerLeft: {
    backgroundColor: citrusPink,
  },
  headerRight: {
    backgroundColor: citrusPink,
  },

  body: {
    marginTop: 225,
    marginLeft: 40,
    marginRight: 40,
    color: '#505050',
    textAlign: 'center',
    fontFamily: 'SpaceMono-Bold'
  },

  logo: {
    width: 150,
    height: 150,
    marginTop: 20,
    marginLeft: 90
  },
  selectImageButton: {
    marginTop: 55,
    marginLeft: 140,
    backgroundColor: '#FC8A67',

  },
};

const CameraView = (props) => {
    return (
      <Container style={styles.container} >

        {
        props.foodTags.length ?
        props.renderClarifaiResponse(props.foodTags) :
        <View>
          <TouchableOpacity onPress={() => Actions.pop()} style={{backgroundColor:citrusPink, height: 40}}>
            <Icon style={{color: '#505050', marginTop: 7, marginLeft: 10}} android="md-arrow-back" ios="ios-arrow-back"/>
          </TouchableOpacity>
          <Text
            style={styles.body}
          >
            Click 'Select an Image' to get started!
          </Text>
          <Button
              onPress={props.selectImage}
              style={styles.selectImageButton}
              >
            <Text>
              Select an Image
            </Text>
          </Button>
        </View>
       }
    </Container>)
}

export default CameraView;

