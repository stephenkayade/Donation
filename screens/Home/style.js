import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({

    home: {
        flex:1,
    },

    header: {
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(24),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerIntroText: {
        fontFamily: 'Inter_18pt-light',
        fontSize: scaleFontSize(16),
        lineHeight: scaleFontSize(19),
        fontWeight: '400',
        color: '#636776',
    },

    username:{
        marginTop: verticalScale(5),
    },

    profileImage: {
        width: horizontalScale(50),
        height: verticalScale(50),
    },

    searchBox:{
        marginHorizontal: horizontalScale(24),
        marginTop: verticalScale(20),
    },

    hightlightImageContainer: {
        marginHorizontal: horizontalScale(24),
    },

    highlightImage: {
        width: '100%',
        height: verticalScale(160),
    },
    categories: {
        marginLeft: horizontalScale(24),
    },
    categoryItem:{
        marginRight: horizontalScale(10),
    },
    categoryHeader: {
        marginBottom: verticalScale(16),
        marginTop: verticalScale(6),
    },
    donationItemContainer: {
        marginTop: verticalScale(20),
        marginHorizontal:horizontalScale(24),
        flexDirection: 'row',
        gap: 1,
    },
    singleDonationItem: {
        maxWidth: '49%',
    },

});

export default style;
