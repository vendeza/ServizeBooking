import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Platform } from 'react-native';
// import LottieView from 'lottie-react-native';
import CustomButton from '../components/CustomButton';

import CustomListButton from '../components/CustomListButton';
import Layout from '../components/Layout';
import styles from './styles/home';
import Wave from 'react-native-waveview';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
    Header,
    Button,
    Left,
    Right,
    Text,
    Content,
    Icon,
    Thumbnail,
    List,
    ListItem,
    Container,
} from 'native-base';
import { Drawer } from 'native-base';
import SideBar from '../components/SideBar';

function isBookingLocked(selectedEmployee, selectedService, selectedTimeSlot) {
    return !selectedEmployee || !selectedService || !selectedTimeSlot;
}

export default class HomeScreen extends React.Component {
    closeDrawer() {
        this.drawer._root.close();
    }

    openDrawer() {
        this.drawer._root.open();
    }

    resetAnimation = () => {
        this.animation.reset();
        this.animation.play();
    };
    showMenuBtton() {
        if (Platform.OS !== 'ios') {
            return (
                <Left>
                    <Button transparent onPress={() => this.openDrawer()}>
                        <Icon style={styles.icons} name="menu" />
                    </Button>
                </Left>
            );
        } else {
            return null;
        }
    }
    render() {
        const { navigate } = this.props.navigation;

        let selectedEmployee = null;
        let selectedService = null;
        let selectedTimeSlot = null;
        if (this.props.route.params) {
            selectedEmployee = this.props.route.params.selectedEmployee;
            selectedService = this.props.route.params.selectedService;
            selectedTimeSlot = this.props.route.params.selectedTimeSlot;
        }

        const locked = isBookingLocked(
            selectedEmployee,
            selectedService,
            selectedTimeSlot,
        );

        return (
            <Drawer
                ref={ref => {
                    this.drawer = ref;
                }}
                content={<SideBar navigation={navigate} />}
                onClose={() => this.closeDrawer()}>
                <Layout navigation={navigate}>
                    <Header
                        transparent
                        style={{ paddingLeft: wp('4%'), height: hp('12%') }}>
                        <StatusBar
                            translucent
                            backgroundColor="transparent"
                            barStyle="light-content"
                        />
                        <Left>
                            <Button
                                style={styles.buttonMenu}
                                transparent
                                onPress={() => this.openDrawer()}>
                                <Icon style={styles.iconMenu} name="menu" />
                            </Button>
                        </Left>
                        <Right />
                    </Header>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        contentContainerStyle={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <View style={_styles.container}>
                            <Wave
                                style={_styles.wave}
                                H={hp('15%')}
                                waveParams={[
                                    { A: 115, T: 1140, fill: '#DD4A42' },
                                ]}
                                animated={true}
                            />
                        </View>
                        <View style={styles.animationContainer}>
                            <Thumbnail
                                style={styles.logo}
                                large
                                source={require('../../img/girl.png')}
                            />

                            <Text style={styles.title}>Servize</Text>
                            <Text style={styles.p}>
                                Make booking an appointment with the best
                                craftsmen
                            </Text>
                        </View>
                        {/* TODO: Дублирование кода */}
                        <View style={styles.containerButtons}>
                            <CustomListButton
                                mapStyle={{
                                    marginTop: 2,
                                }}
                                navigation={navigate}
                                title="Employee"
                                nav="Employee"
                                icon="ios-person"
                                selectedValue={selectedEmployee}
                            />
                            <CustomListButton
                                mapStyle={{
                                    marginTop: 2,
                                }}
                                navigation={navigate}
                                title="Service"
                                nav="Service"
                                selectedValue={selectedService}
                            />
                            <CustomListButton
                                mapStyle={{
                                    marginTop: 2,
                                }}
                                navigation={navigate}
                                title="Date & time"
                                nav="DateAndTime"
                                selectedValue={selectedTimeSlot}
                            />

                            <CustomButton
                                locked={locked}
                                mapStyle={{
                                    backgroundColor: locked
                                        ? 'rgba(255,255,255,0.5)'
                                        : '#eee',
                                }}
                                navigation={navigate}
                                title="To book"
                                nav="Booking"
                            />
                        </View>
                    </View>
                </Layout>
            </Drawer>
        );
    }
}

const _styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('80%'),
        bottom: 0,
        position: 'absolute',

        padding: 0,
    },
    wave: {
        aspectRatio: 1,
        overflow: 'hidden',
        flex: 1,
        height: hp('20%'),
        bottom: 0,
        padding: 0,
    },
});
