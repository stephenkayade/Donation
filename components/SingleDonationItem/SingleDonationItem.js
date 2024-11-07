import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import style from './style';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';

import PropTypes from 'prop-types';

const SingleDonationItem = (props) => {
    return (
        <Pressable onPress={() => props.onPress(props.donationItemId)}>

            <View>
                <View style={style.badge}>
                    <Badge title={props.badgeTitle} />
                </View>
                <Image
                    resizeMode="cover"
                    source={{ uri: props.uri }}
                    style={style.image}
                />
            </View>
            <View style={style.donationInfo}>
                <Header title={props.donationTitle} type={3} color={'#0a043c'} />
                <View style={style.price}>
                    <Header title={`$${props.price.toFixed(2)}`} type={3} color={'#156cf7'} />
                </View>
            </View>

        </Pressable>
    );
};

SingleDonationItem.default = {
    onPress: () => {},
};

SingleDonationItem.propTypes = {
    donationItemId: PropTypes.number.isRequired,
    uri: PropTypes.any.isRequired,
    badgeTitle: PropTypes.string.isRequired,
    donationTitle: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onPress: PropTypes.func,
};

export default SingleDonationItem;
