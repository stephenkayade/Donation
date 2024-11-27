import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({

    label: {
        color: '#36455A',
        fontFamily: 'Inter_18pt',
        fontWeight: '400',
        fontSize: scaleFontSize(12),
        lineHeight: scaleFontSize(15)
    },
    input: {
        paddingVertical: verticalScale(12),
        fontFamily: 'Inter_18pt',
        fontWeight: '500',
        fontSize: scaleFontSize(16),
        lineHeight: scaleFontSize(19.36),
        color: '#022150',
        borderBottomWidth: 1,
        borderBottomColor: '#A7A7A750',
    }

});

export default style;
