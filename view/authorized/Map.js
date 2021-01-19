import React from 'react'
import { SafeAreaView, Text, View } from "react-native";
import Color from '../../common/color';

const Map = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{backgroundColor: Color.red, flex: 1,}}>
                <Text>{'Map'}</Text>
            </View>
        </SafeAreaView>
    )
};

export default Map;