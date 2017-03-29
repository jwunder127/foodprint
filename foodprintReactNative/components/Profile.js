import React from 'react';
import {
  TouchableOpacity
} from 'react-native';
import { Container, Content, View, Button, Text } from 'native-base';

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

  selectImageButton: {
    marginTop: 55,
    marginLeft: 170,
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
              style={styles.selectImageButton}
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
