import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Text,
    View,
    List,
    ListItem,
    Thumbnail,
    Card,
    CardItem,
    Item,
    Input,
} from 'native-base';
import mainStyles from '../screens/styles/main';
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SideBar = props => {
    return (
        <Container style={styles.container}>
            <LinearGradient
                colors={['#c24058', '#c64d52', '#ca594b']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ flex: 1, position: 'relative', zIndex: 0 }}>
                <Content>
                    <Header transparent searchBar style={styles.header}>
                        <StatusBar
                            translucent
                            backgroundColor="transparent"
                            barStyle="light-content"
                        />
                    </Header>
                    <View style={styles.wrap}>
                        <View style={styles.userCard}>
                            <Thumbnail
                                style={styles.photo}
                                source={require('../../img/girl.png')}
                            />
                            <Text style={styles.textHeader}> Servize</Text>
                        </View>
                        <Card transparent>
                            <CardItem
                                button
                                style={styles.buttonSidebar}
                                onPress={() => props.navigation('History')}>
                                <Left>
                                    <Icon style={styles.icon} name="history" />
                                    <Text style={styles.text}>History</Text>
                                </Left>
                            </CardItem>
                            <CardItem
                                button
                                style={styles.buttonSidebar}
                                onPress={() => props.navigation('About')}>
                                <Left>
                                    <Icon style={styles.icon} name="map" />
                                    <Text style={styles.text}>About</Text>
                                </Left>
                            </CardItem>
                            <CardItem
                                button
                                style={styles.buttonSidebar}
                                onPress={() => props.navigation('Contacts')}>
                                <Left>
                                    <Icon style={styles.icon} name="contacts" />
                                    <Text style={styles.text}>Branches</Text>
                                </Left>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
            </LinearGradient>
        </Container>
    );
};

SideBar.propTypes = {};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#30222a',
    },
    wrap: {
        paddingLeft: wp('4%'),
    },
    icon: {
        color: '#fff',
        fontSize: hp('3%'),
        marginRight: 10,
    },
    buttonSidebar: {
        marginTop: hp('2%'),
        backgroundColor: 'transparent',
        paddingLeft: 40,
    },
    text: {
        color: '#eee',
        fontSize: hp('3%'),
    },
    header: {
        height: 60,
    },
    textHeader: {
        fontSize: hp('4%'),
        color: '#eee',
        marginTop: 12,
        marginBottom: 0,
    },
    photo: {
        height: hp('15%'),
        width: hp('15%'),
        borderRadius: 1000,
    },
    userCard: {
        marginBottom: hp('4%'),
        marginLeft: 40,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
});

export default SideBar;
