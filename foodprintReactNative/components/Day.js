import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {


} from 'react-native';
import Moment from 'moment';
import { Container, Content, Icon, Button, Text, Footer, FooterTab, Body, Left, Right } from 'native-base';

export default class Day extends Component {

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

    const goToDay = () => Actions.day({date: Moment(this.state.date).format('MMMM DD YYYY')})
    const goToCalendar = () => Actions.calendar
    const goToToday = () => Actions.day({date: Moment().format('MMMM DD YYYY')})

    return (
      <Container>
      <Content>
        <Text style={{margin: 100}}>
          {this.props.date}
        </Text>
        <Button onPress={Actions.meal} title="Go To Meal Page" />
        </Content>

        </Container>
    );
  }
}

