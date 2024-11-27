import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import style from "./style";
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { Routes } from '../../navigation/Routes';

const Login = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(email, password)

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container}>

                <View style={globalStyle.marginBottom24}>
                    <Header title={'Welcome Back'} type={1} />
                </View>

                <View style={globalStyle.marginBottom24}>

                    <Input
                        label='Email'
                        placeholder={'Enter your email...'}
                        onChangeText={(value) => setEmail(value)}
                        keyboardType={'email-address'}
                    />

                </View>

                <View style={globalStyle.marginBottom24}>

                    <Input
                        label='Password'
                        placeholder={'******'}
                        onChangeText={(value) => setPassword(value)}
                        secureTextEntry={true}
                    />

                </View>

                <View style={globalStyle.marginBottom24}>
                    <Button title='Login' />
                </View>
                <Pressable style={style.registrationButton} onPress={() => navigation.navigate(Routes.Register)}>
                    <Header color={'#156CF7'} type={3} title={"Don't have an account?"} />
                </Pressable>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Login