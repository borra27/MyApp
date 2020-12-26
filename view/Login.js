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

const Login = ({navigation}) => {
    const [id, setID] = useState('');
    const [pw, setPW] = useState('');
  
    return (
      <SafeAreaView style={{flex: 1, margin: 20}}>
        <DefaultInput 
          placeholder={'ID'} 
          value={id}
          onChangeText={id => setID(id)}
        />  
        <DefaultInput 
          placeholder={'PW'} 
          value={pw}
          onChangeText={pw => setPW(pw)}
        />  
        <Button 
          title="로그인"
          onPress={() => navigation.navigate('Login')}
        />
      </SafeAreaView>
    );
  }

  export default Login;