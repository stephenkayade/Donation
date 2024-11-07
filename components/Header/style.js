import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { scaleFontSize } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    title1: {
        fontFamily: getFontFamily('Inter_18pt', '600'),
        fontSize: scaleFontSize(24),
        lineHeight: scaleFontSize(29),
        fontWeight: getFontFamily('Inter_18pt', '600'),
        color: '#000000',
    },
    title2: {
        fontFamily: getFontFamily('Inter_18pt', '600'),
        fontSize: scaleFontSize(18),
        lineHeight: scaleFontSize(22),
        fontWeight: getFontFamily('Inter_18pt', '600'),
        color: '#000000',
    },
    title3: {
        fontFamily: getFontFamily('Inter_18pt', '600'),
        fontSize: scaleFontSize(16),
        lineHeight: scaleFontSize(19),
        fontWeight: getFontFamily('Inter_18pt', '600'),
        color: '#000000',
    },
});

export default style;
