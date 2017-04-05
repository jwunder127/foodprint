import React from 'react';
import { Container, Content, View, Button, Text } from 'native-base';
import {vw, vh} from '../util';

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

  body: {
    marginTop: 225,
    marginLeft: 40,
    marginRight: 40,
    color: '#505050',
    textAlign: 'center',
    fontFamily: 'SpaceMono-Bold'
  },

  selectLogoutButton: {
    marginTop: vh(10),
    marginLeft: vw(40),
    backgroundColor: '#FC8A67',
  },
};


export default function Meal (props) {


    return (
     <Container style={styles.container}>
      <Content>
          <View>
          <Text
            style={styles.body}
          >
            Hi! You are loged in as:
            {props.user ? `\n${props.user.name}\n${props.user.email}` : ''}
          </Text>
          <Button
              onPress={() => props.handleLogout()}
              style={styles.selectLogoutButton}
              >
            <Text>
              Log Out
            </Text>
          </Button>
        </View>
      </Content>
      </Container>
    )
  }
