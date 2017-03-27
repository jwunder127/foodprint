import React, { Component } from 'react';
import { Icon, Container, Content } from 'native-base';

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
          <Icon name="nutrition" style={{color: iconColor}}/>
  )
}

export function homeIcon (props) {

  return (
          <Icon name="home" style={{color: iconColor}}/>
  )
}


