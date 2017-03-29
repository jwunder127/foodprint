import React, { Component } from 'react';
import {connect} from 'react-redux';
import Home from '../components/Home';
import { Actions } from 'react-native-router-flux';
import { setMeal } from '../reducers/meal';
import { logout } from '../reducers/authThunks';



export class HomeContainer extends Component {

  constructor(props){
    super(props)

    this.handleMealClick = this.handleMealClick.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    Actions.mainTabBar()
  }

   handleMealClick(meal){
    this.props.selectMeal(meal);
    Actions.meal();
  }

  handleLogout(){
    this.props.logout();
    Actions.login();
  }

    render() {
      return (
        <Home
        meals={this.props.allMeals}
        handleMealClick={this.handleMealClick}
        handleLogout={this.handleLogout}
        />
      )
    }
}

const mapStateToProps = state => {
  return {
    allMeals: state.meal.allMeals
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectMeal: (meal) => {
      dispatch(setMeal(meal))
    },
    logout: () => {
      dispatch(logout())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)

