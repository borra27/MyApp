import React, { useState, useEffect } from 'react'
import {DefaultInput} from '../components/TextInput'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
  } from 'react-native';

const Start = ({navigation}) => {
    const [id, setID] = useState('');
    const [pw, setPW] = useState('');
  
    return (
      <SafeAreaView style={{flex: 1, margin: 20}}>
        <Button 
          title="로그인"
          onPress={() => navigation.navigate('Login')}
        />
        <Button 
          title="회원가입"
          onPress={() => navigation.navigate('SignUp')}
        />
        
      </SafeAreaView>
    );
  }

  export default Start;