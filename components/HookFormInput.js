import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput as Input,
  View,
} from 'react-native';
import Color from '../common/color';
import { Controller } from "react-hook-form";

export const HookFormInput = (props) => {
  const {
    style, errorText, onChangeText, 
    name, control, errors,
    required, maxLength, minLength, max, min, pattern, validate, valueAsNumber, valueAsDate, setValueAs,
    ...otherProps
  } = props;
  
  return (
      <View>
        {control && <Controller
          control={control}
          name={name || 'defaultInput'}
          render={({ onChange, onBlur, value }) => (
            <Input 
              {...otherProps}
              onBlur={onBlur}
              style={[
                css.input, 
                name && errors[name] ? css.errorInput : css.normalInput, 
                style
              ]}
              placeholderTextColor={
                name && errors[name] ? Color.red : Color.white
              }
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
        rules={{ required, maxLength, minLength, max, min, pattern, validate, valueAsNumber, valueAsDate, setValueAs }}
        defaultValue={""}
      />}
        {name && errors[name] && 
          <Text style={css.errorText}>
            {errorText}
          </Text>
        }
      </View>
    )  
}

const css = StyleSheet.create({
  input: {
    borderBottomWidth: StyleSheet.hairlineWidth, 
    margin: 10,
    padding: 10, 
    borderRadius: 5,
    fontSize: 20,
  },
  normalInput: {
    borderBottomColor: Color.white,
  },
  errorInput: {
    borderBottomColor: Color.red,
  },
  errorText: {
    color: Color.red,
    marginLeft: 5,
    paddingLeft: 10, 
  },
})