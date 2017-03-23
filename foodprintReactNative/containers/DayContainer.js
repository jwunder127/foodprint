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
      const date = this.props.date.slice(0,10)
      console.log("Day container props:", date)
    return (
      <Day meals={this.props.meals} date={date} />
    )
  }
}


export default connect(mapStateToProps)(MealContainer)


