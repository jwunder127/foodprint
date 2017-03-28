import React, { Component } from 'react';
import {connect} from 'react-redux';
import Summary from '../components/Summary';
import { Actions } from 'react-native-router-flux'
import { setMealsByTag } from '../reducers/meal'



export class SummaryContainer extends Component {

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
      <Summary meal={this.props.selectedMeal} handleTagClick={this.handleTagClick} />
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryContainer)
