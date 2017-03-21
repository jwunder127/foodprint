import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Button, Form, Item, Input, Icon, Label, Grid, Col, Row, Text } from 'native-base';
import Camera from 'react-native-camera';




export default class CameraView extends Component {

  render() {
    return (
            <Container>
            <Header />
              <Content>
                <Text> Hello and welcome </Text>
              </Content>
            </Container>
            )
  }
}
