import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styleConstants from './constants';
export default StyleSheet.create({
    text: {
        marginLeft: 20,
        fontSize: 17,
    },
    titleScreen: {
        fontSize: hp('4%'),
        textAlign: 'center',
        paddingBottom: hp('8%'),
        zIndex: 20,
        backgroundColor: styleConstants.titleBackgroundColor,
        color: styleConstants.titleFontColor,
        borderBottomLeftRadius: 60,
    },
    safeAreaView: {
        flex: 1,
        backgroundColor: '#eee',
    },
    h1: {
        color: '#eee',
        fontSize: hp('4%'),
        textAlign: 'center',
        marginBottom: hp('3%'),
    },
    input: {
        color: '#eee',
        fontSize: hp('3%'),
        height: hp('6%'),
        padding: 0,
        marginTop: hp('4%'),
    },
    whiteIcon: {
        color: '#eee',
        fontSize: hp('4%'),
        marginTop: hp('4%'),
    },
    mainContent: {
        flex: 1,
        paddingLeft: wp('6%'),
        paddingRight: wp('6%'),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomCircle: {
        backgroundColor: styleConstants.bottomCircleColor,
        width: 70,
        height: 70,
        position: 'absolute',
        top: -10,
        right: -1,
        zIndex: 5,
    },
    topCircle: {
        backgroundColor: styleConstants.topCircleColor,
        width: 180,
        height: 180,
        position: 'absolute',
        top: 0,
        right: 10,
        zIndex: 10,
        borderRadius: 60,
    },
});
