import React, { Component } from 'react';
import {connect} from 'react-redux';
import Summary from '../components/Summary';
import { Actions } from 'react-native-router-flux'
import { setMealsByTag, setMeal } from '../reducers/meal'
import moment from 'moment';


export class SummaryContainer extends Component {

  constructor(props){
    super(props)

    this.handleTagClick = this.handleTagClick.bind(this);
    this.handleMealClick = this.handleMealClick.bind(this);
  }

  handleTagClick(tag){
    this.props.selectMeals(tag)
    Actions.day({label: tag})
  }

  handleMealClick(meal){
    this.props.selectMeal(meal)
    Actions.meal()
  }
    render() {

    //convert date to user friendly format to send as a display prop
    let date = this.props.selectedMeal.totalMeals[0].created_at.slice(0, 10)
    date = moment(date).format('MMMM DD YYYY')

    return (
      <Summary
      meal={this.props.selectedMeal}
      handleTagClick={this.handleTagClick}
      handleMealClick={this.handleMealClick}
      date={date}
      />
    )
  }
}

const mapStateToProps = state => {

  return {
    selectedMeal: state.meal.summarizedMeal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectMeals: (tag) => {
      dispatch(setMealsByTag(tag))
    },
    selectMeal: (meal) => {
      dispatch(setMeal(meal))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryContainer)
