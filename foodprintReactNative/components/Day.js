import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class Day extends Component {

  render() {
    return (
      <View>
        <Text style={{margin: 100}}>
          Day Page!
        </Text>
        <Button onPress={Actions.meal} title="Go To Meal Page" />
      </View>
    );
  }
}

