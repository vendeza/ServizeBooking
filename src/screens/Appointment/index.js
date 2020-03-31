import React, { useState } from 'react';
import { Accordion } from 'native-base';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import TimeSlot from './TimeSlot';
import { times } from '../../store';
import { Header, Left, Right, Button, Icon, Title } from 'native-base';
import Layout from '../../components/Layout';
import SearchBar from '../../components/SearchBar';
import stylesAccordion from '../styles/accordion';
import styles from '../styles/appointment';
import mainStyles from '../styles/main';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const renderContext = (style, action) => item => {
    return (
        <View>
            {item.slots.map((e, i) => (
                <TimeSlot
                    key={i}
                    styleMap={style}
                    time={e}
                    onSlotPressed={e1 => action(e1)}
                />
            ))}
        </View>
    );
};

//TODO: убрать

const AppointmentScreen = props => {
    const { navigate } = props.navigation;
    const [step, setStep] = useState(true);
    const [date, setDate] = useState();

    const _renderHeader = (item, expanded) => {
        return (
            <View style={stylesAccordion.accordionHeader}>
                <Text style={stylesAccordion.accordionHeaderText}>
                    {item.title}
                </Text>
                <Icon
                    style={styles.icon}
                    name={expanded ? 'ios-arrow-down' : 'ios-arrow-forward'}
                />
            </View>
        );
    };

    return (
        <Layout navigation={navigate}>
            <SearchBar
                onBackScreen={() => navigate('Home')}
                onChangeItemS
                earch={name => this.searchEmployee(name)}
            />
            <Text
                style={{
                    ...mainStyles.titleScreen,
                    borderBottomLeftRadius: 0,
                }}>
                Booking date and time{' '}
            </Text>
            <View>
                {step ? (
                    <View>
                        <Calendar
                            markingType={'custom'}
                            theme={{
                                backgroundColor: '#eee',
                                calendarBackground: '#eee',
                                textSectionTitleColor: '#eee',
                            }}
                            onDayPress={e => {
                                console.log(e);
                                setDate(e.dateString);
                                setStep(false);
                            }}
                        />
                    </View>
                ) : (
                    <View style={styles.list}>
                        <Accordion
                            style={{
                                zIndex: 10,
                                borderTopColor: 'transperent',
                                borderRightColor: 'rgba(255,255,255, 0.0)',
                                borderRightWidth: 0,
                            }}
                            expanded={1}
                            dataArray={times}
                            renderHeader={_renderHeader}
                            renderContent={renderContext(styles, e => {
                                console.log('pressed', e);
                                navigate('Home', {
                                    selectedTimeSlot: date + ' ' + e,
                                });
                            })}
                        />
                    </View>
                )}
            </View>
        </Layout>
    );
};
export default AppointmentScreen;
