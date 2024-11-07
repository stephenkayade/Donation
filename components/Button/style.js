import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    button: {
        backgroundColor: '#2979f2',
        height: verticalScale(55),
        justifyContent: 'center',
        borderRadius: scaleFontSize(50),
    },
    disabled: {
        opacity: 0.5,
    },
    title: {
        fontFamily: 'Inter_18pt-Medium',
        fontSize: scaleFontSize(16),
        fontWeight: '500',
        lineHeight: scaleFontSize(19),
        color: '#ffffff',
        textAlign: 'center',
    },
});

export default style;
