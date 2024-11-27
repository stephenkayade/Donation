import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import style from "./style";
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';

const Register = ({ navigation }) => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(fullName)

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>

            <View style={style.backButton}>

                <BackButton onPress={() => navigation.goBack()} />

            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container}>

                <View style={globalStyle.marginBottom24}>
                    <Header title={'Hello and Welcome!'} type={1} />
                </View>

                <View style={globalStyle.marginBottom24}>

                    <Input
                        label='First & Last Name'
                        placeholder={'Enter your first & Last Name...'}
                        onChangeText={(value) => setFullName(value)}
                        keyboardType={'email-address'}
                    />

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

                <View>
                    <Button title='Register' />
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default Register