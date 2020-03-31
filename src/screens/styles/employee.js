import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import constantsStyle from './constants';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        borderRightColor: constantsStyle.flatListBorderRightColor,
        borderRightWidth: 10,
        zIndex: 18,
        borderTopRightRadius: 40,
        paddingTop: 40,
        marginTop: -50,
    },

    text: {
        height: 20,
        marginLeft: 20,
        color: constantsStyle.textColor,
    },
    employeeCard: {
        position: 'relative',
        zIndex: 11,
        flexDirection: 'row',
        padding: hp('2%'),
        height: hp('12%'),
        borderColor: '#c64d52',
        justifyContent: 'center',
        shadowColor: '#000',
        // backgroundColor: '#eee',
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
        marginLeft: wp('2.4%'),
        fontSize: hp('2.4%'),
        marginTop: hp('1%'),
        color: constantsStyle.textColor,
    },
    options: {
        fontSize: hp('2%'),
    },
    safeAreaView: {
        flex: 1,
        justifyContent: 'center',
    },
});
