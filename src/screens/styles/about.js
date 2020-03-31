import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
    photo: {
        width: wp('80%'),
        height: hp('40%'),
        borderRadius: 20,
        marginTop: hp('5%'),
        zIndex: 100,
    },
    text: {
        marginTop: hp(2),
        color: '#eee',
        fontSize: hp('2.4%'),
        paddingLeft: wp(10),
        paddingRight: wp(10),
        paddingTop: hp(1),
    },
});
