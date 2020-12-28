import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TextInput as Input,
} from 'react-native';
import Color from '../common/color';

export const DefaultInput = ({style, ...props}) => {
  // const [value, setVlue] = useState('');

    return (
      <Input 
        {...props}
        style={[css.input, style]}
        placeholderTextColor={Color.white}
        // onChangeText={value => setValue(value)} 
        // value={value}
      />
    )  
}

const css = StyleSheet.create({
  input: {
    // borderColor: 'black', 
    borderBottomColor: Color.white,
    borderBottomWidth: StyleSheet.hairlineWidth, 
    margin: 10,
    padding: 10, 
    borderRadius: 5,
    fontSize: 20,
  }
})

// export default TextInput;