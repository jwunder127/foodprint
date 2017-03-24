import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Text,
  View,
  Button
} from 'react-native';
import { Container, Content, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


export default function Meal (props) {

    console.log("Home component", props)
     const meals = props.meals

    const printImages = () =>{
        let rows = [];
        let count = 0;
        meals.forEach((meal)=> {
        let element =  0
         rows.push(

           <Row key={count}><Thumbnail key={count} style={{width: 300, height: 300, margin: 30}}  source={{uri: meal.photoUrl}} /></Row>
           )
         count += 1
        })
        return rows
      }


    console.log("Home Screen")
    return (
     <Container>
      <Content>
      <Grid>
        {printImages()}
      </Grid>
      </Content>
      </Container>
    )
  }




