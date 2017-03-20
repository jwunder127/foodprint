import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Button, Form, Item, Input, Icon, Label, Grid, Col, Row, Text } from 'native-base'

export default class Login extends Component {

  render() {
    return (
      <Container>
        <Content>
          <Form style={styles.mainForm}>
              <Item floatingLabel>
                  <Label>Email</Label>
                  <Input/>
              </Item>
              <Item floatingLabel>
                  <Label>Password</Label>
                  <Input secureTextEntry={true}/>
              </Item>
              <Button style={styles.mainActionBtn} full light onPress={Actions.home}><Label>Login</Label></Button>
              <Grid style={styles.mainGrid}>
                <Col style={styles.mainGridCol}>
                  <Label style={styles.mainGridLabel}>Login with:</Label>
                  <Row style={styles.mainGridRow}>
                    <Button style={styles.socialBtn} iconLeft bordered>
                        <Icon name='logo-facebook' />
                        <Text style={styles.text}>Facebook</Text>
                    </Button>
                    <Button style={styles.socialBtn} iconLeft bordered>
                        <Icon name='logo-google' style={styles.google}/>
                        <Text style={styles.text}>Google</Text>
                    </Button>
                  </Row>
                </Col>
              </Grid>
              <Button style={styles.secondActionBtn} full light onPress={Actions.signup}><Label>Sign Up</Label></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = {
  mainForm: {
    margin: 40,
    marginTop: 60
  },
  mainGrid: {
    margin: 15
  },
  mainGridCol: {
    backgroundColor: 'white',
    height: 100
  },
  mainGridLabel: {
    margin: 10
  },
  mainGridrow: {
    flexWrap:'wrap'
  },
  text: {
    color: "grey"
  },
  google: {
    color: 'red'
  },
  mainActionBtn: {
    margin: 25
  },
  secondActionBtn: {
    margin: 40
  },
  socialBtn: {
    marginTop: 10,
    marginLeft: 25,
    borderColor: 'grey'
  }
}
