import React, { Component } from 'react';
import {connect} from 'react-redux';
import Home from '../components/Home';
import { Actions } from 'react-native-router-flux';



const mapStateToProps = state => {

  return {
    allMeals: state.meal.allMeals
  }
}

export class HomeContainer extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount() {
    Actions.mainTabBar()
  }

    render() {
      return (
        <Home meals={this.props.allMeals} />
      )
    }
}
export default connect(mapStateToProps)(HomeContainer)

