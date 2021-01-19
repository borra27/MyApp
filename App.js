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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import Start from './view/Start'
// import Login from './view/Login'
// import SignUp from './view/SignUp'
// import FindPassword from './view/unauthorized/FindPassword';

import Home from './view/authorized/Home';
import Schedule from './view/authorized/Schedule';
import Map from './view/authorized/Map';
import Message from './view/authorized/Message';
import Setting from './view/authorized/Setting';

import Color from './common/color';
import { TabBar } from './components/TabBar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NavigationMainOptions = {
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
    },
};
const App = () => {

  useEffect(() => {
    setTimeout(() => {
        SplashScreen.hide();
    }, 3000);
  }, [])

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
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
            ...NavigationMainOptions,
          }}
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{
            title: '회원가입',
            ...NavigationMainOptions,
          }}
        />
        <Stack.Screen 
          name="FindPassword" 
          component={FindPassword} 
          options={{
            title: '비밀번호 찾기',
            ...NavigationMainOptions,
          }}
        />
      </Stack.Navigator> */}
      <Tab.Navigator
        sceneContainerStyle={{backgroundColor: Color.white}}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            
            let iconName;
            switch(route.name) {
              case 'Home':
                iconName = "home";
                break;
              case 'Setting':
                iconName = "settings"
                break;
              case 'Schedule':
                iconName = "document"
                break;
              case 'Map':
                iconName = "location"
                break;
              case 'Message':
                iconName = "chatbubble-ellipses"
                break;
            }
          
            return focused ? (
            <View style={styles.bigTabBarIconOuter}>
              <View style={styles.bigTabBarIconInner}>
                <Ionicons name={iconName} size={35} color={Color.white} />
              </View>
            </View>
            ) : (
            <View style={styles.smallTabBarIconContainer}>
              <Ionicons name={iconName} size={25} color={Color.main} />
              <Text style={{paddingTop: 5, color: Color.main}}>
                {route.name}
              </Text>
            </View>
            );
          },
        })}
        tabBarOptions={{
          style: {
            height: 100,
            backgroundColor: Color.white,
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
            position: 'absolute'
          },
          showLabel: false,
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={Home}
        />
        <Tab.Screen 
          name="Schedule" 
          component={Schedule} 
        />
        <Tab.Screen 
          name="Map" 
          component={Map} 
        />
        <Tab.Screen 
          name="Message" 
          component={Message} 
        />
        <Tab.Screen 
          name="Setting" 
          component={Setting} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
};


const styles = StyleSheet.create({
  bigTabBarIconOuter: {
    position: 'absolute', 
    top: -15, 
    left: 0, 
    backgroundColor: Color.white,
    borderRadius: 80 / 2, 
    width: 80, 
    height: 80,
  },
  bigTabBarIconInner: {
    position: 'absolute', 
    backgroundColor: Color.main,
    borderRadius: 70 / 2, 
    width: 70, 
    height: 70,
    left: 5, 
    top: 5,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  smallTabBarIconContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});

export default App;
