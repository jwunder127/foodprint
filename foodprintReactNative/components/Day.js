import React, { Component } from 'react';
import {
  Container,
  Content,
  Header,
  Title,
  ListItem,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Icon,
  Thumbnail,
  List,
  Badge
} from 'native-base';
import {Text, ScrollView, TouchableOpacity, StyleSheet, View, Button, Text as RNText} from 'react-native';
import { Actions } from 'react-native-router-flux';
import store from '../store';
import { setMeal } from '../reducers/camera'



export default function Meal (props) {

    console.log('DAY', props)
    //putting into an array for testing purposes until the store has all the users meals on it
    const mealsArray = props.meals

    console.log("Meals Array", mealsArray)

    //const goToDay = (meal) => {Actions.day({meal: meal})}

    const handle = (meal) => {
      store.dispatch(setMeal(meal));
      console.log(meal)
      Actions.meal();
    }


    return (
      <Container style={{marginTop: 10, marginBottom: 10}}>
        <RNText style={{color: '#000', fontWeight: 'bold', textAlign: 'center'}}>{props.date}</RNText>
        <Content>
          <List>
             { (mealsArray.length > 0) && mealsArray.map((meal, i) => { return (
               <ListItem key={i}>
                  <TouchableOpacity onPress={()=> handle(meal)}>
                  <Thumbnail style={{width: 120, height: 120}} square source={{uri: meal.photoUrl}} />
                  </TouchableOpacity>
                  <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                    {meal.tags.map((food, i) =>
                    <Badge key={i} style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>{food}</RNText></Badge>
                    )}
                  </View>
              </ListItem>)
             })}
          </List>
        </Content>
      </Container>
    );
  }

