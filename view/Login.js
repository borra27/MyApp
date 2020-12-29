import React, { useState, useEffect } from 'react'
import {DefaultInput} from '../components/DefaultInput'
import {DefaultButton} from '../components/DefaultButton'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
  } from 'react-native';

const Login = ({navigation}) => {
    const [id, setID] = useState('');
    const [pw, setPW] = useState('');
  
    return (
      <SafeAreaView style={{flex: 1, margin: 20}}>
        <DefaultInput 
          placeholder={'User name'} 
          value={id}
          onChangeText={id => setID(id)}
          errorText={'올바르게 입력하세요.'}
        />  
        <DefaultInput 
          placeholder={'Password'} 
          value={pw}
          onChangeText={pw => setPW(pw)}
        />  
        {/* <Text>{'비밀번호 찾기'}</Text> */}
        <DefaultButton
          text={'확인'}
          onPress={() => navigation.navigate('Login')}
        />
      </SafeAreaView>
    );
  }

  export default Login;