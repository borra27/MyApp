import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput as Input,
  View,
} from 'react-native';
import Color from '../common/color';

export const DefaultInput = ({style, isError = true, errorText, ...props}) => {
  
    return (
      <View>
        <Input 
          {...props}
          style={[
            css.input, 
            isError ? css.errorInput : css.normalInput, 
            style
          ]}
          placeholderTextColor={
            isError ? Color.red : Color.white
          }
        />
        {isError && 
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

// export default TextInput;