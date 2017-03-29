import React from 'react';
import {
  TouchableOpacity
} from 'react-native';
import { Container, Content, Thumbnail, List, ListItem, Button, Text, Card, CardItem } from 'native-base';

const citrusYellow = '#F6E49C';
const citrusPink = '#FC8A67';
const citrusOrange = '#E88931';
const citrusGreen = '#00A229';
const periwinkle = '#686CA6'
const lightYellow = '#fbf4d7'

const themeColor = citrusPink
const textColor = '#505050'


export default function Meal (props) {


    return (
     <Container style={{backgroundColor: citrusYellow}}>
      <Content>


        {
         props.meals && props.meals.map((meal, i) => {
            return (
              <Card style={{margin: 10}} key={i}>
              <CardItem bordered style={{backgroundColor: lightYellow}}>
               <TouchableOpacity onPress={()=> props.handleMealClick(meal)}>
                  <Thumbnail style={{width: 300, height: 300, margin: 10}}  source={{uri: meal.photoUrl}} />
              </TouchableOpacity>
               </CardItem>
               </Card>
              )
          })}


      </Content>
      </Container>
    )
  }

// <ListItem itemDivider>
//           <Button rounded danger onPress={() => props.handleLogout()}>
//             <Text> Log Out </Text>
//           </Button>
//         </ListItem>
 <Card >
<CardItem>
 </CardItem>
</Card>


