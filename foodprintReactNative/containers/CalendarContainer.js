import React, { Component } from 'react';
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
import { setMealsByDate } from '../reducers/meal'


const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingRight: 20,
    backgroundColor: '#f7f7f7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



export default class CalendarPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      date: Moment().format(),
    };
  }

  goToDay = () => {
    //Select current meals by date
    let formattedDate = Moment(this.state.date).format().slice(0,10)
    store.dispatch(setMealsByDate(formattedDate))
    // Send user to day page for selcted date
    Actions.day({label: Moment(this.state.date).format('MMMM DD YYYY')})
  }

  render() {

    return (
      <Container style={{marginTop: 40}}>
        <Content>

          <Calendar style={styles.container}
            onDateSelect={(date) => this.setState({date})}

            customStyle={
              {calendarControls: {backgroundColor: '#f6b19c'}}}
            showControls={true}

          eventDates={['2017-03-29', '2016-07-05', '2016-07-28', '2016-07-30']}
          events={[{date: '2017-03-29', hasEventCircle: {backgroundColor: 'powderblue'}}]}
          scrollEnabled
          showControls
          dayHeadings={customDayHeadings}
          monthNames={customMonthNames}
          titleFormat={'MMMM YYYY'}
          prevButtonText={'Prev'}
          nextButtonText={'Next'}

            />
        <Button block onPress={this.goToDay} style={{marginTop: 10, backgroundColor: '#f6b19c'}}>
            <Icon name='pizza' />
            <Icon name='nutrition'  />
            <Icon name='restaurant' />
            <Text>{"Go to: " + Moment(this.state.date).format('MMMM DD YYYY')}</Text>
        </Button>
        </Content>



      </Container>
    );
  }
}


