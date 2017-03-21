import React, { Component } from 'react';
import { login, logout } from '../reducers/auth';
import {connect} from 'react-redux';
import Home from '../components/Home';
import LoginComponent from '../components/LoginComponent'

export class LoginContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: this.props.user,
      email: '',
      password: ''
    };
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.doLogin = this.doLogin.bind(this);
    this.doLogout = this.doLogout.bind(this);
  }

  updateEmail(text){
    this.setState({ email: text });
  }

  updatePassword(text){
    this.setState({ password: text });
  }

  doLogin() {
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    if (!this.props.user){
      return (
        <LoginComponent updateEmail={this.updateEmail} updatePassword={this.updatePassword} doLogin={this.doLogin} doLogout={this.doLogout} />
      );
    } else {
      return (
        <Home />
      );
    }
  }
}

export default connect(
  ({ auth }) => ({ user: auth }),
  { login, logout }
)(LoginContainer)
