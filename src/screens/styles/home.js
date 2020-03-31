import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
    containerButtons: {
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    background: {
        flex: 1,
    },
    logo: {
        height: hp('16%'),
        width: hp('16%'),
        borderRadius: 1000,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(69,85,117,0.7)',
    },
    nameCompany: {
        fontSize: hp('10%'),
        padding: 10,
        color: '#fff',
        position: 'absolute',
        textAlign: 'center',
        top: 10,
        left: 0,
        right: 0,
        bottom: 0,
    },
    animationContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('4%'),
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },

    title: {
        fontSize: hp('4%'),
        color: '#eee',
        marginTop: 10,
    },
    p: {
        textAlign: 'center',
        color: '#eee',
        fontSize: hp('2.4%'),
        marginTop: 10,
    },
    buttonMenu: {
        color: '#fff',
    },
    iconMenu: {
        fontSize: hp('5%'),
        color: '#eee',
    },
});
