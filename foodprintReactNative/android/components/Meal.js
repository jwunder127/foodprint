import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class Meal extends Component {

  render() {
    return (
      <View>
        <Text style={{margin: 100}}>
          Meal Page!
        </Text>
        <Button onPress={Actions.home} title="Go To Home Page"/>
      </View>
    );
  }
}

