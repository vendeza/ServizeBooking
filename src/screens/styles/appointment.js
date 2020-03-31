import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
    icon: {
        color: '#eee',
        fontSize: hp('2.5%'),
    },
    timeslot: {
        height: hp('8%'),
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: hp('4%'),
        borderBottomColor: 'rgba(255,255,255, 0.2)',
        borderBottomWidth: 1,
        backgroundColor: 'rgba(255,255,255, 0.2)',
        display: 'flex',
        flexDirection: 'row',
    },

    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },

    timeslotFree: {
        borderBottomColor: 'rgba(255,255,255, 0)',
        borderRadius: 20,
        backgroundColor: '#80c904',
        color: '#666',
        alignItems: 'center',
        justifyContent: 'center',
        width: hp('3%'),
        height: hp('3%'),
        marginLeft: wp('3%'),
    },

    timeslotReserved: {
        borderBottomColor: 'rgba(255,255,255, 0)',
        borderRadius: 20,
        backgroundColor: '#c64d52',
        color: '#666',
        alignItems: 'center',
        justifyContent: 'center',
        width: hp('3%'),
        height: hp('3%'),
        marginLeft: wp('3%'),
    },
    textFree: {
        flex: 4,
        fontSize: hp('4%'),
        textAlign: 'center',
        color: '#eee',
    },
    textNotFree: {
        flex: 4,
        fontSize: hp('4%'),
        textAlign: 'center',
        color: 'rgba(255,255,255, 0.4)',
    },
});
