import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Button, Form, Item, Input, Icon, Label, Grid, Col, Row, Text } from 'native-base'

export default class Signup extends Component {

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
                  <Input/>
              </Item>
              <Item floatingLabel>
                  <Label>Confirm Password</Label>
                  <Input/>
              </Item>
              <Button style={styles.mainActionBtn} full light onPress={Actions.home}><Label>Sign Up</Label></Button>
              <Grid style={styles.mainGrid}>
                <Col style={styles.mainGridCol}>
                  <Label style={styles.mainGridLabel}>Sign Up with:</Label>
                  <Row style={styles.mainGridrow}>
                    <Button style={styles.socialBtn} iconLeft bordered>
                        <Icon name='logo-facebook' />
                        <Text style={styles.text}>Facebook</Text>
                    </Button>
                    <Button style={styles.socialBtn} iconLeft bordered>
                        <Icon name='logo-google' style={{color: 'red'}}/>
                        <Text style={styles.text}>Google</Text>
                    </Button>

                  </Row>
                </Col>
              </Grid>
              <Button style={styles.secondActionBtn} full light onPress={Actions.login}><Label>Login</Label></Button>
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
