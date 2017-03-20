import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class Calendar extends Component {

  render() {
   return (
      <View>
        <Text style={{margin: 100}}>
          Calendar Page!
        </Text>
        <Button onPress={Actions.day} title="Go To Day Page"/>
      </View>
    );
  }
}

