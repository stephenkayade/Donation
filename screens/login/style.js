import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({

    container: {
        marginHorizontal: horizontalScale(24),
        justifyContent: 'center',
        flex: 1,
    },

    registrationButton: {
        alignItems: 'center'
    },

    error: {
        color: '#ff0000',
        fontFamily: 'Inter_18pt',
        fontSize: scaleFontSize(16),
        fontWeight: '500',
        marginBottom: verticalScale(24),
    },

    success: {
        color: '#28a745',
        fontFamily: 'Inter_18pt',
        fontSize: scaleFontSize(16),
        fontWeight: '500',
        marginBottom: verticalScale(24),
    }

});

export default style;
