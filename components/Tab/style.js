import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    tab: {
        backgroundColor: '#2979f2',
        height: verticalScale(50),
        justifyContent: 'center',
        borderRadius: scaleFontSize(50),
    },
    inactiveTab: {
        backgroundColor: '#f3f5f9',
    },
    inactiveTitle: {
        color: '#79869f',
    },
    title: {
        fontFamily: 'Inter_18pt-Medium',
        fontSize: scaleFontSize(14),
        fontWeight: '500',
        lineHeight: scaleFontSize(17),
        color: '#ffffff',
        textAlign: 'center',
    },
});

export default style;
