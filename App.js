import React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'


import Routes from './src/routes'

export default () =>{
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}
