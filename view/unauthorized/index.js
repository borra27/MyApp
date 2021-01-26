import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Color from '../../common/color';

import Start from './Start'
import Login from './Login'
import SignUp from './SignUp'
import FindPassword from './FindPassword';

const Stack = createStackNavigator();

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

const Unauthorized = () => {
    return (
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
        </Stack.Navigator>
    )
}

export default Unauthorized