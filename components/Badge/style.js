import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    badge: {
        backgroundColor: '#145855',
        height: verticalScale(22),
        justifyContent: 'center',
        borderRadius: scaleFontSize(100),
    },
    title: {
        fontFamily: 'Inter_18pt-SemiBold',
        fontSize: scaleFontSize(10),
        fontWeight: '600',
        lineHeight: scaleFontSize(12),
        color: '#ffffff',
        textAlign: 'center',
    },
});

export default style;
