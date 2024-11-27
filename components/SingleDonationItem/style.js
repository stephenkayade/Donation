import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    image: {
        width: horizontalScale(140),
        height: verticalScale(170),
        borderRadius:scaleFontSize(20),
    },
    badge: {
        position: 'absolute',
        zIndex: 1,
        top: verticalScale(13),
        left: horizontalScale(10),
    },
    donationInfo: {
        marginTop: verticalScale(16),
    },
    price: {
        marginTop: verticalScale(5),
    },

});

export default style;
