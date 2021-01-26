import React from 'react'
import {HookFormInput} from '../../components/HookFormInput'
import {DefaultButton} from '../../components/DefaultButton'
import {
  Alert,
  SafeAreaView,
} from 'react-native';
import { useForm } from "react-hook-form";
import Pattern from '../../common/pattern';
import { TextButton } from '../../components/TextButton';
import Color from '../../common/color';
import API, { STATUS } from '../../server/api';
import * as URL from '../../server/url';
import { storeToken } from '../../common/asyncStorage';

const Login = ({navigation}) => {
    const { control, handleSubmit, errors } = useForm({mode: 'onChange'});
    const onSubmit = async data => {
      const {username: userid, password: userpw} = data;
      
      const {status, token, id} = await API.post(
        URL.LOGIN, 
        {userid, userpw}
      )
      
      if (status === STATUS.SUCCESS) {
        console.log({id});
        Alert.alert("성공", "대시보드로 이동합니다.") 
        await storeToken(id)
        // 대시보드로 이동
      }
      else
        Alert.alert("알림", "계정을 잘못 입력하였습니다.") 
    }

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
          autoCapitalize={'none'}
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