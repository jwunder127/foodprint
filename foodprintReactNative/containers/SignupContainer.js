import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Button, Form, Item, Input, Label } from 'native-base'
import {signup} from '../reducers/authThunks';

const styles = {
  mainForm: {
    margin: 40,
    marginTop: 60
  },
  text: {
    color: 'grey'
  },
  mainActionBtn: {
    margin: 25
  },
  secondActionBtn: {
    margin: 40
  },
}

export class SignupContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };

    this.inputName = this.inputName.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputPassword = this.inputPassword.bind(this);
    this.signUpSubmit = this.signUpSubmit.bind(this);
  }

  inputName(text) {
    this.setState({ name: text });
  }

  inputEmail(text) {
    this.setState({ email: text });
  }

  inputPassword(text) {
    this.setState({ password: text });
  }

  signUpSubmit() {
    this.props.createNewAccount(this.state);
  }

  render() {
    return (
      <Container>
        <Content>
          <Form style={styles.mainForm}>
            <Item stackedLabel >
              <Label>Name</Label>
              <Input onChangeText={(text) => this.inputName(text)}/>
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input onChangeText={(text) => this.inputEmail(text)}/>
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input secureTextEntry={true} onChangeText={(text) => this.inputPassword(text)}/>
            </Item>
            <Button style={styles.mainActionBtn} block info onPress={this.signUpSubmit}><Label>Sign Up</Label></Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNewAccount(credentials) {
      dispatch(signup(credentials));
    }
  }
};

export default connect(null, mapDispatchToProps)(SignupContainer);
