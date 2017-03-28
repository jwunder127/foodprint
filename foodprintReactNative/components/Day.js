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
import {Text, TouchableOpacity, View, Text as RNText} from 'react-native';


const themeColor = '#FC8A67' //#f6b19c

export default function Meal (props) {

    const mealsArray = props.meals

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
                      <Badge key={i} style={{margin: 5, backgroundColor: themeColor}}><RNText>{food}</RNText></Badge>
                      </TouchableOpacity>
                    )
                    })}
                  </View>
              </ListItem>)
             })}
          </List>

          {props.meals.length && props.label.includes('20') ?
           <Button block style={{backgroundColor: themeColor, marginBottom: 10}} onPress={() => props.goToDailySummary(mealsArray)}>
            <Text>See Daily Nutritional Summary</Text>
          </Button>
           :
          <Button block style={{backgroundColor: themeColor, marginBottom: 10}} onPress={() => props.handleTagReset()}>
            <Text>Back to Calendar</Text>
          </Button>}
        </Content>
      </Container>
    );
  }

