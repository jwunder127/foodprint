import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Text,
  View,
  Button
} from 'react-native';


export default class Login extends Component {

  render() {
    return (
      <View>
        <Text style={{margin: 100}}>
          Login Page!
        </Text>
        <Button onPress={Actions.home} title="Go To Home page"/>
      </View>
    );
  }
}

