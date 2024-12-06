import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({

    container: {
        marginHorizontal: horizontalScale(24),
        justifyContent: 'center',
        flex: 1,
    },
    backButton: {
        marginHorizontal: horizontalScale(14),
        marginTop: verticalScale(7),
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
