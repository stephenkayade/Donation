import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import style from "./style";
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { Routes } from '../../navigation/Routes';
import { loginUser } from '../../api/user';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/reducers/User';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const dispatch = useDispatch()

    const login = async () => {
        let user = await loginUser(email, password)
        if (!user.status) {
            setError(user.error)
        } else {
            setError('')
            dispatch(logIn(user.data))
            setTimeout(() => {
                navigation.navigate(Routes.Home)
            }, 3000)
        }
    }

    const isDisabled = email.length < 5 || password.length < 8

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


                {
                    error.length > 0 &&
                    <Text style={style.error}>{error}</Text>
                }

                {
                    success.length > 0 &&
                    <Text style={style.success}>{error}</Text>
                }


                <View style={globalStyle.marginBottom24}>
                    <Button isDisabled={isDisabled} title='Login' onPress={login} />
                </View>
                <Pressable style={style.registrationButton} onPress={() => navigation.navigate(Routes.Register)}>
                    <Header color={'#156CF7'} type={3} title={"Don't have an account?"} />
                </Pressable>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Login