import React, { Component } from 'react';
import {
  Container,
  Content,
  ListItem,
  Thumbnail,
  List,
  Badge
} from 'native-base';
import {Text, ScrollView, TouchableOpacity, StyleSheet, View, Button, Text as RNText} from 'react-native';
import { Actions } from 'react-native-router-flux';
import store from '../store';
import { setMeal, setMealsByTag } from '../reducers/meal'

export default function Meal (props) {

     const setTag = (foodTag) => {
     //Set the selected meals to be all those that contain the clicked food tag
     store.dispatch(setMealsByTag(foodTag))
     Actions.day({date: foodTag})
   }


    //console.log('DAY', props)

    const mealsArray = props.meals

   // console.log("Meals Array", mealsArray)

    //const goToDay = (meal) => {Actions.day({meal: meal})}

    const goToDay = (meal) => {
      // Update the state to reflect the currently selected meal and send user to the Meal view
      store.dispatch(setMeal(meal));
      Actions.meal();
    }

    return (
      <Container style={{marginTop: 10, marginBottom: 10}}>
        <RNText style={{color: '#000', fontWeight: 'bold', textAlign: 'center'}}>{props.date}</RNText>
        <Content>
          <List>
             { (mealsArray.length > 0) && mealsArray.map((meal, i) => { return (
               <ListItem key={i}>
                  <TouchableOpacity onPress={()=> goToDay(meal)}>
                  <Thumbnail style={{width: 120, height: 120}} square source={{uri: meal.photoUrl}} />
                  </TouchableOpacity>
                  <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                    {meal.tags.map((food, i) => {
                    return (
                      <TouchableOpacity key={i} onPress={()=>setTag(food)}>
                      <Badge key={i} style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>{food}</RNText></Badge>
                      </TouchableOpacity>
                    )
                    })}
                  </View>
              </ListItem>)
             })}
          </List>
        </Content>
      </Container>
    );
  }

