import React, { Component } from 'react';
import {
  Container,
  Content,
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
import FooterComponent from './Footer'

export default class DayView extends Component {

  render() {


    return (



      <Container style={{marginTop: 10, marginBottom: 10}}>
        <RNText style={{color: '#000', fontWeight: 'bold', textAlign: 'center'}}>{this.props.date}</RNText>
        <Content>
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
        </Content>

      </Container>
    );
  }
}
