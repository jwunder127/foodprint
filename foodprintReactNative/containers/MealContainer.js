import React, { Component } from 'react';
import {connect} from 'react-redux';
import Meal from '../components/Meal';


const mapStateToProps = state => {
  console.log('Meal state', state)
  return {
    selectedMeal: state.cameraResults.selectedMeal
  }
}

export class MealContainer extends Component {

  constructor(props){
    super(props)
  }



    render() {
      console.log("Meal container props:", this.props)
    return (
      <Meal meal={this.props.selectedMeal} />
    )
  }
}


export default connect(mapStateToProps)(MealContainer)


