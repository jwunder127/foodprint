import React, { Component } from 'react';
import {connect} from 'react-redux';
import Day from '../components/Day';
import { setMeal, setMealsByTag } from '../reducers/meal'
import { Actions } from 'react-native-router-flux';



export class MealContainer extends Component {

  constructor(props){
    super(props)

    this.handleMealClick = this.handleMealClick.bind(this)
    this.handleTagClick = this.handleTagClick.bind(this)
    this.handleTagReset = this.handleTagReset.bind(this)
  }

  handleMealClick(meal){
    this.props.selectMeal(meal)
    Actions.meal();
  }

  handleTagClick(tag){
    this.props.selectMeals(tag)
    Actions.day({label: tag})
  }

  handleTagReset(){
    Actions.home()
  }

    render() {

     let label = this.props.label

    //console.log("Day container props:", label)
    return (
      <Day
      meals={this.props.meals}
      label={label}
      handleMealClick={this.handleMealClick}
      handleTagClick={this.handleTagClick}
      handleTagReset={this.handleTagReset}
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
    selectMeal(meal) {
      dispatch(setMeal(meal))
    },
    selectMeals(tag) {
      dispatch(setMealsByTag(tag))
   }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealContainer)


