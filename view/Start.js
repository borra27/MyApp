import React, { useState, useEffect } from 'react'
import {DefaultInput} from '../components/TextInput'
import {DefaultButton} from '../components/DefaultButton'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Button,
    Text,
    Pressable,
  } from 'react-native';
import Color from '../common/color';

const Start = ({navigation}) => {
    const [id, setID] = useState('');
    const [pw, setPW] = useState('');
  
    return (
      <SafeAreaView style={{flex: 1, margin: 20, justifyContent: 'space-around'}}>
        <View>
        <Text
          style={{
            color: Color.white,
            fontSize: 90,
            textAlign: 'center',
          }}
        >
          {"여행기"}
        </Text>
        <Text
          style={{
            color: Color.white,
            fontSize: 20,
            textAlign: 'center',
          }}
        >
          {"열심히 일 한 당신 떠나요!"}
        </Text>
        </View>
        <View>
        <DefaultButton
          text={'로그인'}
          onPress={() => navigation.navigate('Login')}
        />
        <DefaultButton
          text={'회원가입'}
          onPress={() => navigation.navigate('SignUp')}
        />
        </View>
      </SafeAreaView>
    );
  }

  export default Start;