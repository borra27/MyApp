import React from 'react'
import {
    Text,
    Pressable,
    TouchableHighlight,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';
import Color from '../common/color';

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
    // textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  }
})
