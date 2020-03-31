import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    button: {
        paddingRight: 10,
        marginTop: hp('3%'),
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('85%'),
        height: hp('7.5%'),
        borderRadius: 1000,
        elevation: 0,
        shadowOpacity: 0,
    },
    text: {
        color: '#c24058',
        fontSize: hp('2.4%'),
        //fontSize: RFValue(15, 580),
    },
    selectedValue: {
        marginLeft: 0,
        //fontSize: RFValue(15, 580),
    },
    nameSection: {
        paddingLeft: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginRight: 0,
        //fontSize: RFValue(18, 580),
        color: '#eee',
    },
});

/**
 * Компонент
 *
 */
const CustomButton = props => {
    return (
        <Button
            disabled={props?.locked}
            style={{ ...styles.button, ...props.mapStyle }}
            title={props.title}
            onPress={() => props.navigation(props.nav, props.opt)}>
            <View style={styles.nameSection}>
                <Icon style={styles.icon} name={props.icon} />
                <Text style={styles.text}>
                    {props.title} {props.selectedValue ? ':' : ''}
                </Text>
                {/* <View style={{width: 180}}>
                    <Text
                        ellipsizeMode="tail"
                        numberOfLines={1}
                        style={styles.selectedValue}>
                        {props.selectedValue}
                    </Text>
                </View> */}
            </View>
        </Button>
    );
};

export default CustomButton;
