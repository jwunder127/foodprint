import React, { Component } from 'react';
import { Image, Text as RNText, View } from 'react-native';
import {Container, Content, Card, CardItem, Body, Text, Badge} from 'native-base';
import axios from 'axios';

export default function Meal (props) {

    console.log("MEAL component", props)

    return (
      <Container style={{marginTop: 10, marginBottom: 10}}>
        <Content>
          <Card>
            <CardItem>
              <Body>
              <Image source={{uri: props.meal.url}} style={{width: 320, height: 200, marginBottom: 10}} />
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <RNText style={{fontWeight: 'bold', fontSize: 25, color:'#000'}}>Nutrition Facts</RNText>
                <RNText style={{fontSize: 15, color:'#000'}}>Calories  {" " + props.meal.nutritionInfo.calories}</RNText>
                <RNText style={{fontSize: 15, color:'#000'}}>Saturated Fat
                {" " + props.meal.nutritionInfo.saturated_fat}g</RNText>
                <RNText style={{fontSize: 15, color:'#000'}}>Trans Fat
                 {" " + props.meal.nutritionInfo.total_fat}g</RNText>
                <RNText style={{fontSize: 15, color:'#000'}}>Cholesterol
                 {" " + props.meal.nutritionInfo.cholesterol}g</RNText>
                <RNText style={{fontSize: 15, color:'#000'}}>Sodium
                 {" " + props.meal.nutritionInfo.sodium}g</RNText>
                <RNText style={{fontSize: 15, color:'#000'}}>Protein
                 {" " + props.meal.nutritionInfo.protein}g</RNText>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
}

