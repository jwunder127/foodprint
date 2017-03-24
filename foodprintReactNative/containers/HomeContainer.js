import React, { Component } from 'react';
import {connect} from 'react-redux';
import Home from '../components/Home';


const mapStateToProps = state => {
  console.log('Meal state', state)
  return {
    allMeals: state.meal.allMeals
  }
}

export class HomeContainer extends Component {

  constructor(props){
    super(props)
  }

//WHen it mounts, set meal to be the one passed in

    render() {
      //console.log("Home container props:", this.props.allMeals)
    return (
      <Home meals={this.props.allMeals} />
    )
  }
}


export default connect(mapStateToProps)(HomeContainer)

