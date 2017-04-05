import React from 'react';
import {
  Container,
  Content,
  Thumbnail,
  Badge,
  Button,
  Card,
  CardItem,
  View,
} from 'native-base';
import {Text, TouchableOpacity, StyleSheet, Text as RNText} from 'react-native';
import {vw, vh} from '../util';


const citrusYellow = '#F6E49C';
const citrusPink = '#FC8A67';
const lightYellow = '#fbf4d7'

const themeColor = citrusPink
const textColor = '#505050'


const styles = StyleSheet.create({
    label: {
        fontSize: 10,
        color: '#000'
    },
    buttonText: {
        color: textColor
    },
    labelText: {
        color: textColor,
        lineHeight: 20,
        fontSize: 10
    },
    button: {backgroundColor: themeColor}
});


export default function Meal (props) {

    const mealsArray = props.meals
    return (
      <Container style={{marginTop: 0, marginBottom: 50, backgroundColor: citrusYellow}}>

        <Content>
          <RNText style={{color: '#505050', fontWeight: 'bold', textAlign: 'center'}}>{props.label}</RNText>
             { (mealsArray.length > 0) && mealsArray.map((meal, i) => { return (
               <Card key={i} style={{margin: 4}}>
               <CardItem bordered style={{backgroundColor: lightYellow}}>
                  <TouchableOpacity onPress={() => props.handleMealClick(meal)}>
                  <Thumbnail style={{width: vw(42.5), height: vh(20)}} square source={{uri: meal.photoUrl}} />
                  </TouchableOpacity>
                  <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', backgroundColor: lightYellow}}>
                    {meal.tags.map((food, i) => {
                    return (
                      <TouchableOpacity key={i} onPress={() => props.handleTagClick(food)}>
                      <Badge key={i} style={{margin: 5, backgroundColor: themeColor}}>
                      <RNText style={styles.labelText}>{food}</RNText></Badge>
                      </TouchableOpacity>
                    )
                  })}

                  </View>
              </CardItem>
              </Card>
              )
             } ) }


          {props.meals.length && props.label.includes('20') ?
           <Button block style={{backgroundColor: themeColor, marginTop: 6, marginBottom: 10}} onPress={() => props.goToDailySummary(mealsArray)}>
            <Text style={styles.buttonText}>See Daily Nutritional Summary</Text>
          </Button>
           :
          <Button block style={{backgroundColor: themeColor, marginTop: 6, marginBottom: 10}} onPress={() => props.handleTagReset()}>
            <Text style={styles.buttonText}>Back to Calendar</Text>
          </Button>}
        </Content>
      </Container>
    );
  }

