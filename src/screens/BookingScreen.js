import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Layout from '../components/Layout';
import mainStyles from './styles/main';
import { IMaskTextInput } from 'react-native-imask';
import { Content, Text, Item, Icon, Input, View } from 'native-base';
import main from './styles/main';
import CustomButton from '../components/CustomButton';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const BookingScreen = props => {
    const { navigate } = props.navigation;
    return (
        <Layout navigation={navigate}>
            <SearchBar onBackScreen={() => navigate('Home')} />
            <View
                style={mainStyles.mainContent}
                contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
                <Text
                    style={{
                        ...mainStyles.titleScreen,
                        paddingBottom: hp('0%'),
                        backgroundColor: 'transperent',
                        color: '#eee',
                    }}>
                    Booking
                </Text>
                <Item>
                    <Icon style={mainStyles.whiteIcon} active name="person" />
                    <Input
                        placeholderTextColor="rgba(255,255,255,0.5)"
                        style={mainStyles.input}
                        placeholder="First name"
                        maxLength={8}
                    />
                </Item>
                <Item>
                    <Icon
                        style={mainStyles.whiteIcon}
                        active
                        name="ios-phone-portrait"
                    />
                    <IMaskTextInput
                        mask="+{7}(000)000-00-00"
                        unmask={true}
                        lazy={false}
                        style={{ ...mainStyles.input, width: wp('81%') }}
                        onAccept={value => {
                            console.log('accept value', value);
                        }}
                        editable={true}
                        keyboardType="phone-pad"
                    />
                    {/* <Input
                            placeholderTextColor="rgba(255,255,255,0.5)"
                            style={mainStyles.input}
                            placeholder="Phone number"
                        /> */}
                </Item>
                <CustomButton
                    locked={false}
                    mapStyle={{
                        backgroundColor: false ? '#eee' : '#eee',
                        marginTop: hp('8%'),
                    }}
                    navigation={navigate}
                    title="To book"
                    nav="Booking"
                />
            </View>
        </Layout>
    );
};

export default BookingScreen;
