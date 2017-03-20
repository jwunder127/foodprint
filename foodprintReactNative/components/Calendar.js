import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {

} from 'react-native';
import {
  StyleSheet,
} from 'react-native';
import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';
import { Container, Content, Button, Icon, Text, Footer, FooterTab, Body, Left, Right } from 'native-base';

export default class CalendarPage extends Component {

//  state: State


  constructor(props) {
    super(props);
    this.state = {
      date: Moment().format(),
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
    };
  }

  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
    });
  }

  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
    });
  }

  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
    });
  }

  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
    });
  }



  render() {
    const BLUE = '#2196F3';
    const WHITE = '#FFFFFF';
    const GREY = '#BDBDBD';
    const BLACK = '#424242';
    const LIGHT_GREY = '#F5F5F5';
    const goToDay = () => Actions.day({date: Moment(this.state.date).format('MMMM DD YYYY')})
    const goToCalendar = () => Actions.calendar
    const goToToday = () => Actions.day({date: Moment().format('MMMM DD YYYY')})

    return (
      <Container style={{marginTop: 80}}>
        <Content padder>

          <Calendar
            onChange={(date) => this.setState({date})}
            selected={this.state.date}

            //finalStage="month"
            minDate={Moment().subtract(10, 'years').startOf('day')}
            maxDate={Moment().add(10, 'years').startOf('day')}
            //General Styling}

            barView={{
              backgroundColor: '#f6b19c',
              padding: 10,
            }}
            barText={{
              fontWeight: 'bold',
              color: WHITE,
            }}
            stageView={{
              padding: 0,
            }}
            // Day selector styling
            dayHeaderView={{
              backgroundColor: LIGHT_GREY,
              borderBottomColor: GREY,
            }}
            dayHeaderText={{
              fontWeight: 'bold',
              color: BLACK,
            }}
            dayRowView={{
              borderColor: LIGHT_GREY,
              height: 40,
            }}
            dayText={{
              color: BLACK,
            }}
            dayDisabledText={{
              color: GREY,
            }}
            dayTodayText={{
              fontWeight: 'bold',
              color: '#f7f1a6',
            }}
            daySelectedText={{
              fontWeight: 'bold',
              backgroundColor: '#f7f1a6',
              color: WHITE,
              borderRadius: 15,
              borderColor: "transparent",
              overflow: 'hidden',
            }}
            // Styling month selector.
            monthText={{
              color: BLACK,
              borderColor: BLACK,
            }}
            monthDisabledText={{
              color: GREY,
              borderColor: GREY,
            }}
            monthSelectedText={{
              fontWeight: 'bold',
              backgroundColor: BLUE,
              color: WHITE,
              overflow: 'hidden',
            }}
            // Styling year selector.
            yearMinTintColor={BLUE}
            yearMaxTintColor={GREY}
            yearText={{
              color: BLACK,
            }}
            />
        <Button block onPress={goToDay} style={{marginTop: 10, backgroundColor: '#f6b19c'}}>
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

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 40,
    backgroundColor: '#F5FCFF',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  buttonStyle: {
    margin: 60
  }
});


//  <Footer >
//           <FooterTab>
//             <Button active={this.state.tab1} onPress={() => {this.toggleTab1(); goToCalendar()}} badgeValue={2} badgeValueStyle={{ color: '#FFF' }}>
//               <Icon active={this.state.tab1} name="calendar" />
//               <Text>Calendar</Text>
//             </Button>
//             <Button active={this.state.tab2} onPress={() => this.toggleTab2()} >
//               <Icon active={this.state.tab2} name="camera" />
//               <Text>Camera</Text>
//             </Button>
//             <Button active={this.state.tab3} onPress={() => {this.toggleTab3(); goToToday()}} badgeValue={51} badgeColor="blue">
//               <Icon active={this.state.tab3} name="nutrition" />
//               <Text>Today</Text>
//             </Button>
//             <Button active={this.state.tab4} onPress={() => this.toggleTab4()} >
//               <Icon active={this.state.tab4} name="calculator" />
//               <Text>Info</Text>
//             </Button>
//           </FooterTab>
//         </Footer>
