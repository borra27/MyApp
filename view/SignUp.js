import React, { useState, useEffect } from 'react'
import {DefaultInput} from '../components/DefaultInput'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
  } from 'react-native';

const SignUp = () => {
    const [id, setID] = useState('');
    const [pw, setPW] = useState('');

    return (
        <SafeAreaView style={{flex: 1, margin: 20}}>
            <DefaultInput 
                placeholder={'User name'} 
                value={id}
                onChangeText={id => setID(id)}
            />  
            <DefaultInput 
                placeholder={'Password'} 
                value={pw}
                onChangeText={pw => setPW(pw)}
            />
            <DefaultInput 
                placeholder={'Password Confirm'} 
                value={pw}
                onChangeText={pw => setPW(pw)}
            />    
        </SafeAreaView>
    )
}

export default SignUp;
