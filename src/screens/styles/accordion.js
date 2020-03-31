import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styleConstants from './constants';

export default StyleSheet.create({
    accordionHeader: {
        flexDirection: 'row',
        padding: hp('2.4%'),
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: styleConstants.textColor,
        borderBottomColor: 'rgba(255,255,255, 0.2)',
        borderBottomWidth: 1,
        borderRightColor: 'rgba(255,255,255, 0.0)',
        borderRightWidth: 0,
    },
    accordionHeaderText: {
        color: styleConstants.textColor,
        fontWeight: '600',
        fontSize: hp('2.4%'),
    },
});
