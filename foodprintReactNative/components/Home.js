import React from 'react';
import {
  TouchableOpacity
} from 'react-native';
import { Container, Content, Thumbnail, List, ListItem, Button, Text } from 'native-base';




export default function Meal (props) {


    return (
     <Container>
      <Content>
      <List>
        {
         props.meals && props.meals.map((meal, i) => {
            return (
              <ListItem key={i}>
               <TouchableOpacity onPress={()=> props.handleMealClick(meal)}>
                  <Thumbnail style={{width: 300, height: 300, margin: 10}}  source={{uri: meal.photoUrl}} />
              </TouchableOpacity>
              </ListItem>)
          })}
      </List>
      </Content>
      </Container>
    )
  }


