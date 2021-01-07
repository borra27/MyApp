import React from 'react'
import {
    Text,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
  } from 'react-native';

export const TextButton = props => {
  const {
    text, onPress, color, viewStyle, textStyle,
    center, right,
  } = props;

  let style = center ? { alignItems: 'center' } : 
                  right ? { alignItems: 'flex-end' } : {};

  return (
    <TouchableOpacity 
      style={[
        style,
        viewStyle,
      ]}
      onPress={onPress}
    >
        <Text style={[
            {color},
            css.text,
            textStyle,
        ]}>
          {text}
        </Text>
    </TouchableOpacity>
  );    
}

const css = StyleSheet.create({
  text: {
    paddingTop: 15,
    paddingBottom: 15,
  }
})
