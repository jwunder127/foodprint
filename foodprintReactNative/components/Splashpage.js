import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
import {Text, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';

const styles = {
  container: {
    backgroundColor: '#f6e49c',
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  headline: {
    marginTop: 50,
    marginLeft: 90,
    color: '#505050',
    fontSize: 25,
    fontFamily: 'SpaceMono-Bold'
  },
  body: {
    marginTop: 60,
    marginLeft: 65,
    marginRight: 40,
    color: '#505050',
    fontFamily: 'SpaceMono-Bold'
  },
  button: {
    marginTop: 85,
    marginRight: 40,
    marginLeft: 40
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 20,
    marginLeft: 90
  }
};


export default function Splashpage (props) {

  return (
    <Container style={styles.container}>
      <Content>
        <Image style={styles.logo} source={require('../img/FoodPrint.png')}  />
        <Text style={styles.headline}>
          Eat Smarter
        </Text>
        <Text style={styles.body}>
          A food log to catalog and track all your meals, daily!
        </Text>
        <Button light block style={styles.button} onPress={Actions.login}>
          <Text>Track Now
          </Text>
        </Button>
      </Content>
    </Container>
  )
}
