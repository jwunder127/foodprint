import React, { Component } from 'react';
import {connect} from 'react-redux';
import Day from '../components/Day';
import { setMeal, setMealsByTag, summarizeMeals } from '../reducers/mealThunks'
import { Actions } from 'react-native-router-flux';



export class DayContainer extends Component {

  constructor(props){
    super(props)

    this.handleMealClick = this.handleMealClick.bind(this)
    this.handleTagClick = this.handleTagClick.bind(this)
    this.handleTagReset = this.handleTagReset.bind(this)
    this.goToDailySummary = this.goToDailySummary.bind(this)
  }

  handleMealClick(meal){
    this.props.selectMeal(meal)
    Actions.meal();
  }

  handleTagClick(tag){
    this.props.selectMeals(tag)
    Actions.day({label: tag})
  }

  goToDailySummary(meals){

    this.props.setMealsToSummarize(meals)
    Actions.summary()
  }

  handleTagReset(){
    Actions.calendar()
  }

    render() {

    return (
      <Day
      meals={this.props.meals}
      label={this.props.label}
      handleMealClick={this.handleMealClick}
      handleTagClick={this.handleTagClick}
      handleTagReset={this.handleTagReset}
      goToDailySummary={this.goToDailySummary}
      />
    )
  }
}

const mapStateToProps = state => {

  return {
    meals: state.meal.selectedMeals
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectMeal: (meal) => {
      dispatch(setMeal(meal))
    },
    selectMeals: (tag) => {
      dispatch(setMealsByTag(tag))
   },
   setMealsToSummarize: (meals) => {
     dispatch(summarizeMeals(meals))
   }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayContainer)


