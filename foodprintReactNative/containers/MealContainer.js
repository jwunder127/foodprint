import React, { Component } from 'react';
import {connect} from 'react-redux';
import Meal from '../components/Meal';


const mapStateToProps = state => {
  console.log('Meal state', state)
  return {
    selectedMeal: state.meal.selectedMeal
  }
}

export class MealContainer extends Component {

  constructor(props){
    super(props)
  }

//WHen it mounts, set meal to be the one passed in

    render() {
      console.log("Meal container props:", this.props)
    return (
      <Meal meal={this.props.selectedMeal} />
    )
  }
}


export default connect(mapStateToProps)(MealContainer)


