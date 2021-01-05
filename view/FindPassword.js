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
import { useForm } from 'react-hook-form';
import Pattern from '../common/pattern';

const FindPassword = ({navigation}) => {
    const { control, handleSubmit, errors } = useForm({mode: 'onChange'});
    const onSubmit = data => console.log({data});
  
    return (
      <SafeAreaView style={{flex: 1, margin: 20}}>
        <HookFormInput 
          name={"username"}
          placeholder={'User name'}         
          control={control}
          errors={errors}
          errorText={'올바른 이메일을 입력하세요.'}
          required
          pattern={Pattern.email}
        />   
        <DefaultButton
          text={'비밀번호 찾기'}
          onPress={handleSubmit(onSubmit)}
        />
      </SafeAreaView>
    );
  }

  export default FindPassword;