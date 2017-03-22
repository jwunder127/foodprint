import React, { Component } from 'react';
import { Image, Text as RNText, View } from 'react-native';
import {Container, Content, Card, CardItem, Body, Text, Badge} from 'native-base';
import axios from 'axios';

export default class FooterTabsExample extends Component {


  constructor(props){
    super(props)
    this.state = {
      tagArray: []
    }
  }



  render() {
    return (
      <Container style={{marginTop: 10, marginBottom: 10}}>
        <Content>
          <Card>
            {/*<CardItem>*/}
              {/*<Body>*/}
              {/*<Image source={{uri: this.props.uri}} style={{width: 320, height: 200, marginBottom: 10}}/>*/}
              {/*<View style={{flexDirection: 'row', flexWrap: 'wrap'}}>*/}
                {/*{(this.state.tagArray.length > 0) && this.state.tagArray.map(foodTag => {*/}
                  {/*<Badge style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>{}</RNText></Badge>*/}
                {/*})}*/}
              {/*</View>*/}
              {/*</Body>*/}
            {/*</CardItem>*/}
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
