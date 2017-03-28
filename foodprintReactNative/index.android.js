import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import LoginContainer from './containers/LoginContainer'
import SignupContainer from './containers/SignupContainer'
import CalendarPage from './containers/CalendarContainer'
import CameraContainer from './containers/CameraContainer';
import SummaryContainer from './containers/SummaryContainer';
import Day from './containers/DayContainer'
import Meal from './containers/MealContainer'
import Home from './containers/HomeContainer'
import Moment from 'moment';
import { AppRegistry, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import store from './store';
import { getAllMealsFromDB, setMealsByDate } from './reducers/meal';
import { calendarIcon, cameraIcon, nutritionIcon, homeIcon } from './components/Icons';


const style = StyleSheet.create({
        tabBarStyle: {
            borderTopWidth : 1,
            borderColor    : '#b7b7b7',
            backgroundColor: '#006b76',
        }
    });

const goToToday = () => {
    let formattedDate = Moment().format().slice(0,10)
    store.dispatch(setMealsByDate(formattedDate))
    Actions.day({label: Moment().format('MMMM DD YYYY')});
}


export default class foodprintReactNative extends Component {

  render() {
    return (
      <Container>
        <Provider store={store}>
          <Router>
            <Scene key="root" hideNavBar={true}>
              <Scene key="login" component={LoginContainer} title="Login" initial={true} />
              <Scene key="signup" component={SignupContainer} title="Sign up" />
              <Scene key="mainTabBar" tabs={true} hideNavBar={true} tabBarStyle={style.tabBarStyle} >
                <Scene key="calendarTab" title="Calendar Tab" icon={calendarIcon} onPress={() => {Actions.calendar()}}>
                  <Scene key="home" component={Home} title="Home" hideNavBar={true} />
                  <Scene key="calendar" component={CalendarPage} title="Calendar View" hideNavBar={true} />
                  <Scene key="day" component={Day} title="Day View" hideNavBar={true} />
                  <Scene key="meal" component={Meal} title="Meal View" hideNavBar={true} />
                  <Scene key="camera" component={CameraContainer} title="Camera View" hideNavBar={true} />
                  <Scene key='summary' component={SummaryContainer} title='Summary view' />
                </Scene>
                <Scene key="cameraTab" title="Camera Tab" icon={cameraIcon} onPress={ () => Actions.camera() }/>
                <Scene key="nutritionTab" title="Nutrition Tab" icon={nutritionIcon} onPress={ () => goToToday() }/>
                <Scene key="homeTab" title="Home Tab" icon={homeIcon} onPress={ () => Actions.home() }/>
              </Scene>
            </Scene>
          </Router>
        </Provider>
      </Container>
    )
  }
}

AppRegistry.registerComponent('foodprintReactNative', () => foodprintReactNative);
