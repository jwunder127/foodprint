import React, { Component } from 'react';
import { Icon, Container, Content, Button, Text } from 'native-base';

const iconColor =  '#c4def6'

export function calendarIcon (props) {

  return (
          <Icon name="calendar" style={{color: iconColor}}/>
  )
}

export function cameraIcon (props) {

  return (
          <Icon name="camera" style={{color: iconColor}}/>
  )
}

export function nutritionIcon (props) {

  return (

      <Icon name="clock" style={{color: iconColor}}/>

  )
}

export function homeIcon (props) {

  return (
          <Icon name="home" style={{color: iconColor}}/>
  )
}

export function profileIcon (props) {

  return (
          <Icon name="person" style={{color: iconColor}}/>
  )
}

