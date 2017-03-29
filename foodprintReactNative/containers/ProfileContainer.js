import React, { Component } from 'react';
import {connect} from 'react-redux';
import Profile from '../components/Profile';
import { Actions } from 'react-native-router-flux';
import { logout } from '../reducers/authThunks';



export class ProfileContainer extends Component {

  constructor(props){
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
  }


  handleLogout(){
    this.props.logout();
  }

    render() {
      return (
        <Profile
        handleLogout={this.handleLogout} user={this.props.user}
        />
      )
    }
}

const mapStateToProps = state => {
  return {
    user: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
