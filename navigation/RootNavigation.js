import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/Welcome';
import { Login } from '../screens/auth';

export default function RootNavigation () {
  //creating the app's view stack
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  }

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="Splash" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}
