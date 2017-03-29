import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {

} from 'react-native';
import {
  StyleSheet,
} from 'react-native';
import Calendar from 'react-native-calendar';
import Moment from 'moment';

import { Container, Content, Button, Icon, Text, Footer, FooterTab, Body, Left, Right } from 'native-base';
import store from '../store';
import { setMealsByDate } from '../reducers/mealThunks'


const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


const citrusYellow = '#F6E49C';
const citrusPink = '#FC8A67';
const citrusOrange = '#E88931';
const citrusGreen = '#00A229';
const periwinkle = '#686CA6'

const textColor = 'black'
const headerColor = '#FC8A67'
const containerColor = '#fbf4d7'//'#F6E49C'//'#f6d540'
const eventColor = '#F2AA2C'
const selectedDay = '#E34052'
const buttonTextColor = '#E34052'

const customStyle = {
    hasEventCircle: {
      backgroundColor: eventColor,
    },
    hasEventDaySelectedCircle: {
      backgroundColor: selectedDay,
    },
    calendarControls: {
      backgroundColor: headerColor
    },
    weekendHeading: {
      color: textColor
    },
    weekendDayText: {
      color: textColor,
    },
     day: {
      color: textColor
    },
     dayHeading: {
       color: textColor
     },
     controlButtonText: {
       color: buttonTextColor
     },
     calendarHeadingText: {
       color: 'black'
     },
     controlButton: {
       backgroundColor: headerColor
     },
    monthContainer: {
      backgroundColor: containerColor
    }

}


export class CalendarContainer extends Component {


  constructor(props) {
    super(props);
    this.state = {
      date: Moment().format(),
      events: []
    };
  }

  goToDay = () => {
    //Select current meals by date
    let formattedDate = Moment(this.state.date).format().slice(0,10)
    this.props.selectMeals(formattedDate)
    // Send user to day page for selcted date
    Actions.day({label: Moment(this.state.date).format('MMMM DD YYYY')})
  }

  render() {

    console.log('Calendar', this.props)

    return (
      <Container style={{marginTop: 0, backgroundColor: citrusYellow}}>
        <Content style={{marginTop: 30}}>
          <Calendar
            onDateSelect={(date) => this.setState({date})}
            customStyle={customStyle}
            showControls={true}
            showEventIndicators={false}
            eventDates={this.props.datesArray}
            scrollEnabled
            dayHeadings={customDayHeadings}
            monthNames={customMonthNames}
            titleFormat={'MMMM YYYY'}
            prevButtonText={'Prev'}
            nextButtonText={'Next'}
            />
        <Button onPress={this.goToDay} style={{marginTop: 10, marginLeft: 55, backgroundColor: headerColor}}>
            <Icon style={{color: buttonTextColor}} name='pizza' />
            <Icon style={{color: buttonTextColor}} name='nutrition'  />
            <Icon style={{color: buttonTextColor}} name='restaurant' />
            <Text style={{color: buttonTextColor}}>{"Go to: " + Moment(this.state.date).format('MMMM DD YYYY')}</Text>
        </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    datesArray: state.meal.datesArray
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectMeals: (date) => {
      dispatch(setMealsByDate(date))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer)

