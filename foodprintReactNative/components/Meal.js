import React from 'react';
import { Text as RNText, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Container, Content, Card, CardItem, Body, Text, Badge, Button, Thumbnail, Footer, Left} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";


const themeColor = '#FC8A67'
const textColor = 'black'

const styles = StyleSheet.create({
labelText: {
    fontSize: 12,
    color: textColor,
    lineHeight: 20
  },
  heading: {
    fontSize: 10,
    color:'#000'
  },
  tableText: {
    fontSize: 15,
    color:'#000'
  }
});


export default function Meal (props) {


    return (
      <Container style={{marginTop: 10, marginBottom: 50}}>
        <Content>
        <RNText style={{color: '#000', fontWeight: 'bold', textAlign: 'center'}}>{props.date}</RNText>
          <Card>
            <CardItem bordered>
              <Thumbnail style={{width: 300, height: 300, margin: 10}} square source={{uri: props.meal.photoUrl}} />

            </CardItem>

            <CardItem bordered>
              <Left>
               <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                   {props.meal.tags.map((foodTag, i) =>{
                   return (
                    <TouchableOpacity key={i} onPress={()=> props.handleTagClick(foodTag)}>
                     <Badge   style={{margin: 3, backgroundColor: themeColor}}><RNText style={styles.labelText}>{foodTag}</RNText></Badge>
                     </TouchableOpacity>
                    )})
                   }
                </View>
              </Left>
              </CardItem>

            <CardItem bordered>
              <Body>
                <RNText style={{fontWeight: 'bold', fontSize: 25, color:'#000'}}>Nutrition Facts</RNText>
                 <Grid>
                 <Col>
                    <Row><RNText style={styles.heading}>  </RNText></Row>
                    <Row><RNText style={styles.tableText}>Calories</RNText></Row>
                    <Row><RNText style={styles.tableText}>Total fat</RNText></Row>
                    <Row><RNText style={styles.tableText}>Saturated fat</RNText></Row>
                    <Row><RNText style={styles.tableText}>Cholesterol</RNText></Row>
                    <Row><RNText style={styles.tableText}>Sodium</RNText></Row>
                    <Row><RNText style={styles.tableText}>Carbohydrates</RNText></Row>
                     <Row><RNText style={styles.tableText}>Sugars</RNText></Row>
                    <Row><RNText style={styles.tableText}>Protein</RNText></Row>
                 </Col>
                 <Col>
                 <Row><RNText style={styles.heading}>Amount per Serving</RNText></Row>
                    <Row><RNText style={styles.tableText}>{ props.meal.nutritionalTable.calories.toFixed(0)}</RNText></Row>
                    <Row><RNText style={styles.tableText}>{ props.meal.nutritionalTable.total_fat.toFixed(0)}g</RNText></Row>
                    <Row><RNText style={styles.tableText}>{ props.meal.nutritionalTable.saturated_fat.toFixed(0)}g</RNText></Row>
                    <Row><RNText style={styles.tableText}>{ props.meal.nutritionalTable.cholesterol.toFixed(0)}mg</RNText></Row>
                    <Row><RNText style={styles.tableText}>{ props.meal.nutritionalTable.sodium.toFixed(0)}mg</RNText></Row>
                    <Row><RNText style={styles.tableText}>{ props.meal.nutritionalTable.total_carbohydrate.toFixed(0)}g</RNText></Row>
                    <Row><RNText style={styles.tableText}>{ props.meal.nutritionalTable.sugars.toFixed(0)}g</RNText></Row>
                    <Row><RNText style={styles.tableText}>{ props.meal.nutritionalTable.protein.toFixed(0)}g</RNText></Row>
                 </Col>
                 <Col>
                   <Row><RNText style={styles.heading}>% Daily Value</RNText></Row>
                  <Row><RNText style={styles.tableText}>{(100 * props.meal.nutritionalTable.calories / 2000).toFixed(0)}%</RNText></Row>
                  <Row><RNText style={styles.tableText}>{(100 * props.meal.nutritionalTable.total_fat / 65).toFixed(0)}%</RNText></Row>
                  <Row><RNText style={styles.tableText}>{(100 * props.meal.nutritionalTable.saturated_fat / 20).toFixed(0)}%</RNText></Row>
                  <Row><RNText style={styles.tableText}>{(100 * props.meal.nutritionalTable.cholesterol / 300).toFixed(0)}%</RNText></Row>
                  <Row><RNText style={styles.tableText}>{(100 * props.meal.nutritionalTable.sodium / 2400).toFixed(0)}%</RNText></Row>
                  <Row><RNText style={styles.tableText}>{(100 * props.meal.nutritionalTable.total_carbohydrate / 300).toFixed(0)}%</RNText></Row>
                  <Row><RNText style={styles.tableText}>--</RNText></Row>
                  <Row><RNText style={styles.tableText}>--</RNText></Row>
                 </Col>
                 </Grid>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
}
