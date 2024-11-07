import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: horizontalScale(6),
        paddingHorizontal: horizontalScale(16),
        backgroundColor: '#f3f5f9',
        height: verticalScale(50),
        borderRadius: horizontalScale(15),
    },
    searchInput: {
        flex: 1,
        height: '100%',
        fontFamily: 'Inter_18pt-Regular',
        fontSize: scaleFontSize(14),
        lineHeight: scaleFontSize(14),
        color: '#686c7a',
    },
});

export default style;
