import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Content,
  Button,
  Form,
  Item,
  Input,
  Icon,
  Label,
  Grid,
  Col,
  Row,
  Text
} from 'native-base'

export default class Signup extends Component {

  render() {
    return (
      <Container>
        <Content>
          <Form style={{margin: 65}}>
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
              <Button style={{margin: 25}} full light onPress={Actions.home}><Label>Sign Up</Label></Button>
              <Grid style={{margin: 15}}>
                <Col style={{ backgroundColor: 'white', height: 100 }}>
                  <Label style={{margin: 10}}>Sign Up with:</Label>
                  <Row style={{flexWrap:'wrap'}}>
                    <Button style={{margin: 2, borderColor: 'grey'}} iconLeft bordered>
                        <Icon name='logo-facebook' />
                        <Text style={{color: "grey"}}>Facebook</Text>
                    </Button>
                    <Button style={{margin: 2, borderColor: 'grey'}} iconLeft bordered>
                        <Icon name='logo-google' style={{color: 'red'}}/>
                        <Text style={{color: "grey"}}>Google</Text>
                    </Button>

                  </Row>
                </Col>
              </Grid>
              <Button style={{margin: 40}} full light onPress={Actions.login}><Label>Login</Label></Button>
          </Form>

        </Content>
      </Container>
    );
  }
}
