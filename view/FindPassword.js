import React, { useState, useEffect } from 'react'
import {HookFormInput} from '../components/HookFormInput'
import {DefaultButton} from '../components/DefaultButton'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
  } from 'react-native';

const FindPassword = ({navigation}) => {
    const [id, setID] = useState('');
    const [pw, setPW] = useState('');
  
    return (
      <SafeAreaView style={{flex: 1, margin: 20}}>
        <DefaultInput 
          placeholder={'User name'} 
          value={id}
          onChangeText={id => setID(id)}
        />   
        <DefaultButton
          text={'비밀번호 찾기'}
          onPress={() => navigation.navigate('Start')}
        />
      </SafeAreaView>
    );
  }

  export default FindPassword;