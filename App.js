/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
// import TextInput from './components/TextInput'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './view/Start'
import Login from './view/Login'
import SignUp from './view/SignUp';

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    setTimeout(() => {
        SplashScreen.hide();
    }, 3000);
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" " component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

// const styles = StyleSheet.create({
  
// });

export default App;
