import React from 'react'
import {
    Text,
    Pressable,
    StyleSheet,
  } from 'react-native';
import Color from '../common/color';

export const DefaultButton = ({text, onPress}) => (
    <Pressable 
      style={({pressed}) => [
        {
          backgroundColor: pressed
            ? Color.lightGray
            : Color.white
        },
        css.pressible
      ]}
      onPress={onPress}
    >
      {() => (
        <Text style={css.text}>
          {text}
        </Text>
        )
      }
    </Pressable>
);

const css = StyleSheet.create({
  pressible: {
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    color: Color.main,
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  }
})
