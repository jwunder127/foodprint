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

     let label = this.props.label

    console.log("Day container props:", label)
    return (
      <Day meals={this.props.meals} label={label} />
    )
  }
}


export default connect(mapStateToProps)(MealContainer)


