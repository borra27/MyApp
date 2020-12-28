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
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './view/Start'
import Login from './view/Login'
import SignUp from './view/SignUp';

import Color from './common/color';

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
        <Stack.Screen 
          name=" " 
          component={Start} 
          options={{
            headerShown: null,
            cardStyle: {
              backgroundColor: Color.main
            }
          }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{
            title: '로그인',
            headerTintColor: Color.white,
            headerStyle: {
              backgroundColor: Color.main,
              shadowColor: 'transparent', 
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            cardStyle: {
              backgroundColor: Color.main
            }
          }}
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{
            title: '회원가입',
            headerTintColor: Color.white,
            headerStyle: {
              backgroundColor: Color.main,
              shadowColor: 'transparent',
            },
            cardStyle: {
              backgroundColor: Color.main
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

// const 
// const styles = StyleSheet.create({
// });

export default App;
