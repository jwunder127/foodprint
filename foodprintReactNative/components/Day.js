import React, { Component } from 'react';
import {
  Container,
  Content,
  ListItem,
  Thumbnail,
  List,
  Badge,
  Button
} from 'native-base';
import {Text, ScrollView, TouchableOpacity, StyleSheet, View, Text as RNText} from 'react-native';




export default function Meal (props) {

  //    const setTag = (foodTag) => {
  //    //Set the selected meals to be all those that contain the clicked food tag
  //    store.dispatch(setMealsByTag(foodTag))
  //    Actions.day({label: foodTag})
  //  }


    //console.log('DAY', props)

    const mealsArray = props.meals

   // console.log("Meals Array", mealsArray)

    //const goToDay = (meal) => {Actions.day({meal: meal})}

    // const goToDay = (meal) => {
    //   // Update the state to reflect the currently selected meal and send user to the Meal view
    //   store.dispatch(setMeal(meal));
    //   Actions.meal();
    // }

    return (
      <Container style={{marginTop: 10, marginBottom: 50}}>
        <RNText style={{color: '#000', fontWeight: 'bold', textAlign: 'center'}}>{props.label}</RNText>
        <Content>
          <List>
             { (mealsArray.length > 0) && mealsArray.map((meal, i) => { return (
               <ListItem key={i}>
                  <TouchableOpacity onPress={() => props.handleMealClick(meal)}>
                  <Thumbnail style={{width: 120, height: 120}} square source={{uri: meal.photoUrl}} />
                  </TouchableOpacity>
                  <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                    {meal.tags.map((food, i) => {
                    return (
                      <TouchableOpacity key={i} onPress={() => props.handleTagClick(food)}>
                      <Badge key={i} style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>{food}</RNText></Badge>
                      </TouchableOpacity>
                    )
                    })}
                  </View>
              </ListItem>)
             })}
          </List>
          {props.label.includes('20') ? null :
              <Button block style={{}} onPress={() => props.handleTagReset()}>
                 <Text>Reset</Text>
              </Button>}
        </Content>
      </Container>
    );
  }

