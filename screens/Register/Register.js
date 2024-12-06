import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import style from "./style";
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import createUser from '../../api/user';
import { Routes } from '../../navigation/Routes';

const Register = ({ navigation }) => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const registerUser = async () => {
        let user = await createUser(fullName, email, password)
        if (user.error) {
            setError(user.error)
        } else {
            setError('')
            setSuccess("You have successfully registered")
            setTimeout(() => {
                navigation.goBack()
            }, 3000)
        }
    }

    const isDisabled = fullName.length <= 2 || email.length < 5 || password.length <= 8

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

                {
                    error.length > 0 &&
                    <Text style={style.error}>{error}</Text>
                }

                {
                    success.length > 0 &&
                    <Text style={style.success}>{error}</Text>
                }


                <View>
                    <Button isDisabled={isDisabled} title='Register' onPress={registerUser} />
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default Register