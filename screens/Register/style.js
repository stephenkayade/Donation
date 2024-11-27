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
    }

});

export default style;
