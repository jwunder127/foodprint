import React, { Component } from 'react';
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
import {Text, ScrollView, StyleSheet, View, Button, Text as RNText} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class DayView extends Component {
  render() {
    return (
      <Container style={{marginTop: 70, marginBottom: 10}}>
        <RNText style={{color: '#000', fontWeight: 'bold', textAlign: 'center'}}>March 20th 2017</RNText>
        <ScrollView>
          <List>
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
