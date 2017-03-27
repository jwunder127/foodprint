import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Button, Form, Item, Input, Label } from 'native-base';

const styles = {
  mainForm: {
    margin: 40,
    marginTop: 120
  },
  text: {
    color: "grey"
  },

  mainActionBtn: {
    margin: 30
  },
  secondActionBtn: {
    margin: 40
  },
}


export default function LoginComponent (props) {

  return (
      <Container>
        <Content>
          <Form style={styles.mainForm}>
            <Item stackedLabel>
                <Label>Email</Label>
                <Input onChangeText={(text) => props.updateEmail(text)} />
            </Item>
            <Item stackedLabel>
                <Label>Password</Label>
                <Input name="pass" secureTextEntry={true} onChangeText={(text) => props.updatePassword(text)} />
            </Item>
            <Button style={styles.mainActionBtn} block info onPress={() => props.doLogin()}><Label>Login</Label></Button>

            <Button style={styles.secondActionBtn} block success onPress={Actions.signup}><Label>Sign Up</Label></Button>
          </Form>
        </Content>
      </Container>
  )
}
