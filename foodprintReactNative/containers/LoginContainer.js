import React, { Component } from 'react';
import { login, logout } from '../reducers/authThunks';
import {connect} from 'react-redux';
import HomeContainer from '../containers/HomeContainer';
import LoginComponent from '../components/LoginComponent';
import { getAllMealsFromDB } from '../reducers/mealThunks'
import { whoami } from '../reducers/authThunks'

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

  componentDidMount() {
    this.props.whoami();
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

  doLogout() {
    this.props.logout();
  }

  render() {

    if (this.props.auth === null || this.props.auth === ""){
      return (
        <LoginComponent updateEmail={this.updateEmail} updatePassword={this.updatePassword} doLogin={this.doLogin} doLogout={this.doLogout} />
      );
    } else {
      this.props.getAllMealsFromDB();
      return (
        <HomeContainer />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login(username, password) {
      dispatch(login(username, password))
    },
    logout() {
      dispatch(logout())
    },
    getAllMealsFromDB() {
      dispatch(getAllMealsFromDB())
    },
    whoami() {
      dispatch(whoami())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
