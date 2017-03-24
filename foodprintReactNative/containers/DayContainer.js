import React, { Component } from 'react';
import {connect} from 'react-redux';
import Day from '../components/Day';


const mapStateToProps = state => {

  return {
    meals: state.meal.selectedMeals
  }
}

export class MealContainer extends Component {

  constructor(props){
    super(props)

  }

    render() {
      let date = 'No Date'
      if (date) date = this.props.date

      //console.log("Day container props:", date)
    return (
      <Day meals={this.props.meals} date={date} />
    )
  }
}


export default connect(mapStateToProps)(MealContainer)


