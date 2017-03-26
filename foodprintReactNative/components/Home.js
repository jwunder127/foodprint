import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
  TouchableOpacity
} from 'react-native';
import { Container, Content, Thumbnail, List, ListItem, Button } from 'native-base';
import store from '../store';
import { setMeal } from '../reducers/meal'
import { logout } from '../reducers/auth';


export default function Meal (props) {


    //Sort all meals by most recent first
     const meals = props.meals


      const goToDay = (meal) => {
      // Update the state to reflect the currently selected meal and send user to the Meal view
        store.dispatch(setMeal(meal));
        Actions.meal();
    }

    const logoutNow = () => {
      store.dispatch(logout());
    }


    return (
     <Container>
      <Content>
      <List>
        {
          meals && meals.map((meal, i) => {
            return (
              <ListItem key={i}>
               <TouchableOpacity onPress={()=> goToDay(meal)}>
                  <Thumbnail style={{width: 300, height: 300, margin: 10}}  source={{uri: meal.photoUrl}} />
              </TouchableOpacity>
              </ListItem>)
          })}
      </List>
          <Button onPress={() => logoutNow()}>
            <Text>LogOut</Text>
        </Button>
      </Content>
      </Container>
    )
  }


