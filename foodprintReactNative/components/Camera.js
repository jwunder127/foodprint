'use strict';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Container, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

const citrusPink = '#FC8A67';

const styles = {
  container: {
    backgroundColor: '#f6e49c',
    flexWrap: 'wrap',
      flex: 1,
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
      color: '#505050',
      textAlign: 'center',
      fontFamily: 'SpaceMono-Bold',
      marginTop: 210,
      marginLeft: 40,
      marginRight: 40
  },
  selectImageButton: {
      marginLeft: 107,
      marginTop: 50,
      backgroundColor: '#FC8A67',
  },
    header: {
        backgroundColor: citrusPink,
        height: 40,
        flexDirection: 'row'
    },
    icon: {
        color: '#505050',
        marginTop: 7,
        marginLeft: 10
    }
};

const CameraView = (props) => {
    return (
      <Container style={styles.container} >

        {
        props.foodTags.length ?
        props.renderClarifaiResponse(props.foodTags) :
        <View>
          <View>
            <TouchableOpacity onPress={() => Actions.pop()} style={styles.header}>
              <Icon style={styles.icon} android="md-arrow-back" ios="ios-arrow-back" />
            </TouchableOpacity>
          </View>
          <View>
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
        </View>
       }
    </Container>)
}

export default CameraView;

