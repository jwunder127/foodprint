import React, { Component } from 'react';
import {connect} from 'react-redux';
import Meal from '../components/Meal';
import { Actions } from 'react-native-router-flux';
import { setMealsByTag } from '../reducers/mealThunks';
import moment from 'moment';

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


    //convert date to user friendly format to send as a display prop
    let date = this.props.selectedMeal.created_at.slice(0, 10)
    date = moment(date).format('MMMM DD YYYY')


    return (
      <Meal
      meal={this.props.selectedMeal}
      handleTagClick={this.handleTagClick}
      date={date}
       />
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


