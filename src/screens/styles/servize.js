import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        display: 'flex',
        borderRadius: 8,
    },

    text: {
        height: 20,
        marginLeft: 20,
        color: '#eee',
    },
    employeeCard: {
        flexDirection: 'row',
        padding: hp('2%'),
        height: hp('12%'),
        borderColor: '#999',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        backgroundColor: 'rgba(255,72,89,0.2)',
        borderBottomColor: 'rgba(255,255,255, 0.3)',
        borderBottomWidth: 1,
    },
    employeePhoto: {
        width: hp('8%'),
        height: hp('8%'),
        borderRadius: 1000,
    },
    nameEmployee: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: wp('4.4%'),
        fontSize: hp('2.4%'),
        color: '#eee',
    },
    options: {
        fontSize: hp('2%'),
    },
    safeAreaView: {
        flex: 1,
        justifyContent: 'center',
    },
    icon: {
        color: '#eee',
        fontSize: hp('2.5%'),
    },
});
