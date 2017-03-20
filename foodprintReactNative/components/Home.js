import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class Home extends Component {

  render() {
    return (
      <View>
        <Text style={{margin: 100}}>
          Home Page!
        </Text>
        <Button onPress={Actions.calendar} title="Go To Calendar page"/>
        <Button onPress={Actions.camera} title="Go To Camera page"/>
      </View>
    );
  }
}

