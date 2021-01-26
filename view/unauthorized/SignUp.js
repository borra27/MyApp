import React from 'react'
import {HookFormInput} from '../../components/HookFormInput'
import {
    SafeAreaView,
  } from 'react-native';
import { useForm } from "react-hook-form";
import Pattern from '../../common/pattern';
import { DefaultButton } from '../../components/DefaultButton';

const SignUp = () => {
    const { control, handleSubmit, errors, getValues } = useForm({mode: 'onChange'});
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
            <HookFormInput 
                name={"passwordConfirm"}
                placeholder={'Password Confirm'} 
                control={control}
                errors={errors}
                errorText={'위와 동일한 비밀번호를 입력하세요.'}
                required
                validate={value => value === getValues("password")}
                secureTextEntry
            />    
            <DefaultButton
                text={'확인'}
                onPress={handleSubmit(onSubmit)}
            />
        </SafeAreaView>
    )
}

export default SignUp;
