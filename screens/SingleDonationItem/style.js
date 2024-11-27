import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({

    container: {
        marginHorizontal: horizontalScale(20),
        marginTop: verticalScale(7),
    },

    image: {
        marginTop: verticalScale(12),
        marginBottom: verticalScale(24),
        width: '100%',
        height: verticalScale(240),
        borderRadius: horizontalScale(5),
    },
    badge: {
        marginBottom: 16
    },
    description: {
        marginTop: verticalScale(7),
        fontFamily: 'Inter_18pt',
        fontWeight: '400',
        fontSize: scaleFontSize(14),
        lineHeight: scaleFontSize(22),
        color: '#000000',
        marginBottom: verticalScale(10)
    },
    button: {
        marginBottom: 8,
        marginHorizontal: horizontalScale(20)
    }

});

export default style;
