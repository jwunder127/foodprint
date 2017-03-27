import React, { Component } from 'react';
import { Image, Text as RNText, View, TouchableOpacity } from 'react-native';
import {Container, Content, Card, CardItem, Body, Text, Badge, Button, Thumbnail} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import axios from 'axios';
import store from '../store';
import { setMealsByTag } from '../reducers/meal'
import { Actions } from 'react-native-router-flux'

export default function Meal (props) {


   const setTag = (foodTag) => {
     //Set the selected meals to be all those that contain the clicked food tag
     store.dispatch(setMealsByTag(foodTag))
     Actions.day({label: foodTag})
   }

    return (
      <Container style={{marginTop: 10, marginBottom: 10}}>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Thumbnail style={{width: 300, height: 300, margin: 10}} square source={{uri: props.meal.photoUrl}} />
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {props.meals && props.meal.tags.map((foodTag, i) =>{
                  return (
                  <TouchableOpacity key={i} onPress={()=>setTag(foodTag)}>
                    <Badge   style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>{foodTag}</RNText></Badge>
                  </TouchableOpacity>
                )})
                }
              </View>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>

                <RNText style={{fontWeight: 'bold', fontSize: 25, color:'#000'}}>Nutrition Facts</RNText>
                 <Grid>





                 <Col>
                    <Row><RNText style={{fontSize: 10, color:'#000' }}>  </RNText></Row>
                    <Row><RNText style={{fontSize: 15, color:'#000' }}>Calories</RNText></Row>
                    <Row><RNText style={{fontSize: 15, color:'#000' }}>Total fat</RNText></Row>
                    <Row><RNText style={{fontSize: 15, color:'#000' }}>Saturated fat</RNText></Row>
                    <Row><RNText style={{fontSize: 15, color:'#000' }}>Cholesterol</RNText></Row>
                    <Row><RNText style={{fontSize: 15, color:'#000' }}>Sodium</RNText></Row>
                    <Row><RNText style={{fontSize: 15, color:'#000' }}>Carbohydrates</RNText></Row>
                     <Row><RNText style={{fontSize: 15, color:'#000' }}>Sugars</RNText></Row>
                    <Row><RNText style={{fontSize: 15, color:'#000' }}>Protein</RNText></Row>
                 </Col>
                 <Col>
                 <Row><RNText style={{fontSize: 10, color:'#000' }}>Amount per Serving</RNText></Row>
                    <Row><RNText style={{fontSize: 15, color:'#000' }}>{" " + props.meal.nutritionalTable.calories.toFixed(0)}</RNText></Row>
                    <Row><RNText style={{fontSize: 15, color:'#000'}}>{" " + props.meal.nutritionalTable.total_fat.toFixed(0)}g</RNText></Row>
                    <Row><RNText style={{fontSize: 15, color:'#000'}}>{" " + props.meal.nutritionalTable.saturated_fat.toFixed(0)}g</RNText></Row>
                    <Row><RNText style={{fontSize: 15, color:'#000'}}>{" " + props.meal.nutritionalTable.cholesterol.toFixed(0)}mg</RNText></Row>
                    <Row><RNText style={{fontSize: 15, color:'#000'}}>{" " + props.meal.nutritionalTable.sodium.toFixed(0)}mg</RNText></Row>
                    <Row><RNText style={{fontSize: 15, color:'#000'}}>{" " + props.meal.nutritionalTable.total_carbohydrate.toFixed(0)}g</RNText></Row>
                    <Row><RNText style={{fontSize: 15, color:'#000'}}>{" " + props.meal.nutritionalTable.sugars.toFixed(0)}g</RNText></Row>
                    <Row><RNText style={{fontSize: 15, color:'#000'}}>{" " + props.meal.nutritionalTable.protein.toFixed(0)}g</RNText></Row>
                 </Col>
                 <Col>
                   <Row><RNText style={{fontSize: 10, color:'#000' }}>% Daily Value</RNText></Row>
                  <Row><RNText style={{fontSize: 15, color:'#000' }}>{" " + (100 * props.meal.nutritionalTable.calories / 2000).toFixed(0)}%</RNText></Row>
                  <Row><RNText style={{fontSize: 15, color:'#000' }}>{" " + (100 * props.meal.nutritionalTable.total_fat / 65).toFixed(0)}%</RNText></Row>
                  <Row><RNText style={{fontSize: 15, color:'#000' }}>{" " + (100 * props.meal.nutritionalTable.saturated_fat / 20).toFixed(0)}%</RNText></Row>
                  <Row><RNText style={{fontSize: 15, color:'#000' }}>{" " + (100 * props.meal.nutritionalTable.cholesterol / 300).toFixed(0)}%</RNText></Row>
                  <Row><RNText style={{fontSize: 15, color:'#000' }}>{" " + (100 * props.meal.nutritionalTable.sodium / 2400).toFixed(0)}%</RNText></Row>
                  <Row><RNText style={{fontSize: 15, color:'#000' }}>{" " + (100 * props.meal.nutritionalTable.total_carbohydrate / 300).toFixed(0)}%</RNText></Row>
                  <Row><RNText style={{fontSize: 15, color:'#000' }}>--</RNText></Row>
                  <Row><RNText style={{fontSize: 15, color:'#000' }}>--</RNText></Row>
                 </Col>

                 </Grid>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
}
