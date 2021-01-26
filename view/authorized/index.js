import React from 'react';
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Schedule from './Schedule';
import Map from './Map';
import Message from './Message';
import Setting from './Setting';
import Color from '../../common/color';

const Tab = createBottomTabNavigator();

const Authorized = () => {

    return (
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
    )
}

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

export default Authorized