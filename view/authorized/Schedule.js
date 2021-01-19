import React from 'react'
import { SafeAreaView, Text, View } from "react-native";
import Color from '../../common/color';

const Schedule = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{backgroundColor: Color.red, flex: 1,}}>
                <Text>{'Schedule'}</Text>
            </View>
        </SafeAreaView>
    )
};

export default Schedule;