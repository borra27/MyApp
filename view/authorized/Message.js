import React from 'react'
import { SafeAreaView, Text, View } from "react-native";
import Color from '../../common/color';

const Message = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{backgroundColor: Color.red, flex: 1,}}>
                <Text>{'Message'}</Text>
            </View>
        </SafeAreaView>
    )
};

export default Message;