import React, { Component } from 'react';
import {connect} from 'react-redux';
import Meal from '../components/Meal';


const mapStateToProps = state => {

  return {
    selectedMeal: state.meal.selectedMeal
  }
}

export class MealContainer extends Component {

  constructor(props){
    super(props)
  }


    render() {
    return (
      <Meal meal={this.props.selectedMeal} />
    )
  }
}


export default connect(mapStateToProps)(MealContainer)


