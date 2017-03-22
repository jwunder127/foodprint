import React, { Component } from 'react';
import { Image, Text as RNText, View } from 'react-native';
import {Container, Content, Card, CardItem, Body, Text, Badge} from 'native-base';

export default class FooterTabsExample extends Component {
  render() {
    return (
      <Container style={{marginTop: 10, marginBottom: 10}}>
        <Content>
          <Card>
            <CardItem>
              <Body>
              <Image source={require('../img/salad.png')} style={{width: 320, height: 200, marginBottom: 10}}/>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Green Peppers</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Chicken</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Onion</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Chicken</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Green Peppers</RNText></Badge>
                <Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>Spinach</RNText></Badge>
              </View>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <RNText style={{fontWeight: 'bold', fontSize: 25, color:'#000'}}>Nutrition Facts</RNText>
                <RNText style={{fontSize: 15, color:'#000'}}>Nutrition Facts</RNText>
                <RNText style={{fontSize: 15, color:'#000'}}>Saturated Fat 9g </RNText>
                <RNText style={{fontSize: 15, color:'#000'}}>Trans Fat 0g</RNText>
                <RNText style={{fontSize: 15, color:'#000'}}>Cholesterol 55mg</RNText>
                <RNText style={{fontSize: 15, color:'#000'}}>Sodium 40mg</RNText>
                <RNText style={{fontSize: 15, color:'#000'}}>Protein 3g</RNText>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
