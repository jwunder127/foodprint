import React, { Component } from 'react';
import {connect} from 'react-redux';
import Meal from '../components/Meal';
import { Actions } from 'react-native-router-flux';
import { setMealsByTag } from '../reducers/mealThunks';
import { Spinner, Container } from 'native-base'
import moment from 'moment';


const citrusYellow = '#F6E49C';
const citrusPink = '#FC8A67';

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

    let date = ''

    //convert date to user friendly format to send as a display prop
    if (this.props.selectedMeal.id !== undefined) {
      date = this.props.selectedMeal.created_at.slice(0, 10)
      date = moment(date).format('MMMM DD YYYY')
    }

    return (
      <Container style={{backgroundColor: citrusYellow}}>
      { this.props.selectedMeal.id === undefined ? <Spinner color={citrusPink} /> :
      <Meal
      meal={this.props.selectedMeal}
      handleTagClick={this.handleTagClick}
      date={date}
       />}
       </Container>
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
