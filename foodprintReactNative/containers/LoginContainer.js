import React, { Component } from 'react';
import { login, logout } from '../reducers/auth';
import {connect} from 'react-redux';
import HomeContainer from '../containers/HomeContainer';
import LoginComponent from '../components/LoginComponent';
import { getAllMealsFromDB } from '../reducers/meal'
import store from '../store';

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
    console.log('email: ',this.state.email)
    this.props.login(this.state.email, this.state.password);
  }

  doLogout() {
    this.props.logout();
  }

  render() {

    if (this.props.auth === null){
      return (
        <LoginComponent updateEmail={this.updateEmail} updatePassword={this.updatePassword} doLogin={this.doLogin} doLogout={this.doLogout} />
      );
    } else {
      store.dispatch(getAllMealsFromDB())
      return (
        <HomeContainer />
      );
    }
  }
}

export default connect(
  ({ auth }) => ({ auth }),
  { login, logout }
)(LoginContainer)
