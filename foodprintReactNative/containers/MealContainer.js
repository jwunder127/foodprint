import React, { Component } from 'react';
import {connect} from 'react-redux';
import Meal from '../components/Meal';
import { Actions } from 'react-native-router-flux'
import { setMealsByTag } from '../reducers/mealThunks'



export class MealContainer extends Component {

  constructor(props){
    super(props)

    this.handleTagClick = this.handleTagClick.bind(this);
  }

  handleTagClick(tag){
    this.props.selectMeals(tag)
    Actions.day({label: tag})
  }

    render() {
    return (
      <Meal meal={this.props.selectedMeal} handleTagClick={this.handleTagClick} />
    )
  }
}

const mapStateToProps = state => {

  return {
    selectedMeal: state.meal.selectedMeal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectMeals: (tag) => {
      dispatch(setMealsByTag(tag))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealContainer)


