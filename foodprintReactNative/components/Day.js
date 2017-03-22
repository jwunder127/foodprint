import React, { Component } from 'react';
import axios from 'axios';
import {
  Container,
  Header,
  Title,
  ListItem,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Icon,
  Thumbnail,
  List,
  Badge
} from 'native-base';
import {Text, ScrollView, TouchableOpacity, StyleSheet, View, Button, Text as RNText} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class DayView extends Component {




    render() {
        const tags = ['pastry', 'grilled cheese sandwich'].join(" ");
        const config = {
            headers: {
                'X-app-id': '055c399f',
                'X-app-key': '022909ef0393813c2e882aff59765a3b',
                'Content-Type': 'application/json'
            }
        };

        const data = {
                "query": tags,
        }

        const url = 'https://trackapi.nutritionix.com/v2/natural/nutrients';

        getNutrientsValue = () => {
            axios.post(url, data, config)
                .then(response => console.log(response.data))
                .catch(console.error)
        };

        getNutrientsValue();

    return (
      <Container style={{marginTop: 70, marginBottom: 10}}>
        <RNText style={{color: '#000', fontWeight: 'bold', textAlign: 'center'}}>{this.props.date}</RNText>
        <ScrollView>
          <List>
            <ListItem>
            <TouchableOpacity onPress={Actions.meal}>
              <Thumbnail style={{width: 120, height: 120}} square source={require('../img/salad.png')} />
            </TouchableOpacity>
              <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Green Peppers</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Chicken</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Onion</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Chicken</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Green Peppers</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Spinach</RNText></Badge>
              </View>
            </ListItem>
            <ListItem>
              <Thumbnail style={{width: 120, height: 120}} square source={require('../img/salad.png')}/>
              <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Green Peppers</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Chicken</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Onion</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Chicken</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Green Peppers</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Spinach</RNText></Badge>
              </View>
            </ListItem>
            <ListItem>
              <Thumbnail style={{width: 120, height: 120}} square source={require('../img/salad.png')}/>
              <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Green Peppers</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Chicken</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Onion</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Chicken</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Green Peppers</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Spinach</RNText></Badge>
              </View>
            </ListItem>
            <ListItem>
              <Thumbnail style={{width: 120, height: 120}} square source={require('../img/salad.png')}/>
              <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Green Peppers</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Chicken</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Onion</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Chicken</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Green Peppers</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Spinach</RNText></Badge>
              </View>
            </ListItem>
            <ListItem>
              <Thumbnail style={{width: 120, height: 120}} square source={require('../img/salad.png')}/>
              <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Green Peppers</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Chicken</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Onion</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Chicken</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Green Peppers</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Spinach</RNText></Badge>
              </View>
            </ListItem>
            <ListItem>
              <Thumbnail style={{width: 120, height: 120}} square source={require('../img/salad.png')}/>
              <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Green Peppers</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Chicken</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Onion</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Chicken</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Green Peppers</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Spinach</RNText></Badge>
              </View>
            </ListItem>
            <ListItem>
              <Thumbnail style={{width: 120, height: 120}} square source={require('../img/salad.png')}/>
              <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Green Peppers</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Chicken</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Onion</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Chicken</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Green Peppers</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Spinach</RNText></Badge>
              </View>
            </ListItem>
            <ListItem>
              <Thumbnail style={{width: 120, height: 120}} square source={require('../img/2.png')}/>
              <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Green Peppers</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Chicken</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Onion</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Chicken</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Green Peppers</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Spinach</RNText></Badge>
              </View>
            </ListItem>
          </List>
        </ScrollView>
      </Container>
    );
  }
}
