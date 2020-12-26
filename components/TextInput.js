import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TextInput as Input,
} from 'react-native';

export const DefaultInput = ({style, ...props}) => {
  // const [value, setValue] = useState('');

    return (
      <Input 
        {...props}
        style={[css.input, style]}
        // onChangeText={value => setValue(value)} 
        // value={value}
      />
    )  
}

const css = StyleSheet.create({
  input: {
    borderColor: 'black', 
    borderWidth: StyleSheet.hairlineWidth, 
    margin: 10,
    padding: 10, 
    borderRadius: 5,
  }
})

// export default TextInput;