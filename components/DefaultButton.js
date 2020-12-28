import React, { useState, useEffect } from 'react'
import {
    Text,
    Pressable,
  } from 'react-native';
import Color from '../common/color';

export const DefaultButton = ({text, onPress}) => (
    <Pressable 
          style={{
            backgroundColor: Color.white,
            borderRadius: 10,
            maringTop: 20,
            marginBottom: 20,
          }}
          onPress={onPress}
        >
          {() => (
          <Text style={{
            color: Color.main,
            fontSize: 25,
            textAlign: 'center',
            paddingTop: 15,
            paddingBottom: 15,
            }}>
            {text}
          </Text>
        )}
    </Pressable>
);

// const css = StyleSheet.create({
//   input: {
//     // borderColor: 'black', 
//     borderBottomColor: Color.white,
//     borderBottomWidth: StyleSheet.hairlineWidth, 
//     margin: 10,
//     padding: 10, 
//     borderRadius: 5,
//     fontSize: 20,
//   }
// })
