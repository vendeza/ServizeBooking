import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Button, Text, Left, Right, Icon } from 'native-base';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    button: {
        paddingRight: 10,
        marginTop: 0,
        backgroundColor: 'rgba(255,255,255,0.0)',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        width: wp('85%'),
        height: hp('8%'),
        borderBottomColor: 'rgba(255,255,255, 0.3)',
        borderBottomWidth: 1,
        elevation: 0,
        shadowOpacity: 0,
    },
    text: {
        color: '#eee',
        marginLeft: 0,
        fontSize: hp('2.4%'),
    },
    icon: {
        marginRight: 4,
        color: '#eee',
        fontSize: hp('2.4%'),
    },
    selectedValue: {
        marginLeft: 0,
        color: '#eee',
        fontSize: hp('2.4%'),
        //fontSize: RFValue(15, 580),
    },
    nameSection: {
        paddingLeft: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerSelectedValue: {},
});

/**
 * Компонент
 *
 */
const CustomListButton = props => {
    const selectedValue = () => {
        if (!props.selectedValue) {
            return <Icon style={styles.text} name="ios-arrow-forward" />;
        } else {
            return (
                <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={styles.selectedValue}>
                    {props.selectedValue}
                </Text>
            );
        }
    };
    return (
        <Button
            disabled={props?.locked}
            style={{ ...styles.button, ...props.mapStyle }}
            title={props.title}
            onPress={() => props.navigation(props.nav, props.opt)}>
            <View style={styles.nameSection}>
                <Left>
                    {/* <Icon style={styles.icon} name={props.icon} /> */}
                    <Text style={styles.text}>
                        {props.title} {props.selectedValue ? ':' : ''}
                    </Text>
                </Left>
                <Right>{selectedValue()}</Right>
            </View>
        </Button>
    );
};

export default CustomListButton;
