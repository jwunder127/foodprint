import React from 'react';
import {
  Container,
  Content,
  ListItem,
  Thumbnail,
  List,
  Badge,
  Button
} from 'native-base';
import {Text, TouchableOpacity, StyleSheet, View, Text as RNText} from 'react-native';


const citrusYellow = '#F6E49C';
const citrusPink = '#FC8A67';
const citrusOrange = '#E88931';
const citrusGreen = '#00A229';
const periwinkle = '#686CA6'

const themeColor = citrusPink
const textColor = '#505050'


const styles = StyleSheet.create({
  label: {
    fontSize: 10,
    color:'#000'
  },
  buttonText: {
    color: textColor
  },
  labelText: {
    color: textColor,
    lineHeight: 22
  },
  button:
    {backgroundColor: themeColor}
});






export default function Meal (props) {

    const mealsArray = props.meals

    return (
      <Container style={{marginTop: 0, marginBottom: 50, backgroundColor: citrusYellow}}>
        <RNText style={{color: 'black', fontWeight: 'bold', textAlign: 'center'}}>{props.label}</RNText>
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
                      <Badge key={i} style={{margin: 5, backgroundColor: themeColor}}>
                      <RNText style={styles.labelText}>{food}</RNText></Badge>
                      </TouchableOpacity>
                    )
                    })}
                  </View>
              </ListItem>)
             })}
          </List>

          {props.meals.length && props.label.includes('20') ?
           <Button block style={{backgroundColor: themeColor, marginBottom: 10}} onPress={() => props.goToDailySummary(mealsArray)}>
            <Text style={styles.buttonText}>See Daily Nutritional Summary</Text>
          </Button>
           :
          <Button block style={{backgroundColor: themeColor, marginBottom: 10}} onPress={() => props.handleTagReset()}>
            <Text style={styles.buttonText}>Back to Calendar</Text>
          </Button>}
        </Content>
      </Container>
    );
  }

