import React from 'react'
import {HookFormInput} from '../components/HookFormInput'
import {DefaultButton} from '../components/DefaultButton'
import {
    SafeAreaView,
  } from 'react-native';
import { useForm } from "react-hook-form";
import Pattern from '../common/pattern';
import { TextButton } from '../components/TextButton';
import Color from '../common/color';

const Login = ({navigation}) => {
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
        <HookFormInput 
          name={"password"}
          placeholder={'Password'} 
          control={control}
          errors={errors}
          errorText={'올바른 비밀번호을 입력하세요.'}
          required
          pattern={Pattern.password}
          secureTextEntry
        />  
        <TextButton
          text={"비밀번호 찾기"}
          textStyle={{marginRight: 15}}
          color={Color.white}
          onPress={() => navigation.navigate('FindPassword')}
          right
        />
        <DefaultButton
          text={'확인'}
          onPress={handleSubmit(onSubmit)}
        />
      </SafeAreaView>
    );
  }

  export default Login;