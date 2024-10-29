import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

import globalStyle from  '../../assets/styles/globalStyle'
import style from './style'

const Home = () => {
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <View>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    )
}

export default Home