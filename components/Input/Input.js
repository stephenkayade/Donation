import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import style from "./style";
import PropTypes from 'prop-types';

const Input = (props) => {

    const [value, setValue] = useState('')

    return (
        <View>
            <Text style={style.label}>{props.label}</Text>
            <TextInput
                keyboardType={props.keyboardType}
                placeholder={props.placeholder ? props.placeholder : null}
                placeholderTextColor={'#02215050'}
                style={style.input}
                value={value}
                secureTextEntry={props.secureTextEntry}
                onChangeText={(val) => { setValue(val); props.onChangeText(val) }}
            />
        </View>
    )
}

Input.default = {
    onChangeText: () => { },
    keyboardType: 'default',
    secureTextEntry: false
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool
}

export default Input