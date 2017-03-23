import React, { Component } from 'react';
import {connect} from 'react-redux';
import Day from '../components/Day';


const mapStateToProps = state => {
  console.log('Meal state', state)
  return {
    meals: state.meal.allMeals
  }
}

export class MealContainer extends Component {

  constructor(props){
    super(props)

  }



    render() {
      console.log("Day container props:", this.props)
    return (
      <Day meals={this.props.meals} date={this.props.date} />
    )
  }
}


export default connect(mapStateToProps)(MealContainer)


