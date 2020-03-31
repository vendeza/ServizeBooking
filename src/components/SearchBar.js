import React, { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Header,
    Left,
    Right,
    Button,
    Text,
    Item,
    Input,
    Title,
    Body,
    Picker,
    ListItem,
    View,
    Radio,
    CheckBox,
    Form,
} from 'native-base';
import styleConstants from '../screens/styles/constants';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Filter = props => {
    let selected2;
    const onValueChange2 = value => {
        selected2 = value;
    };

    return (
        <View>
            <View style={{ backgroundColor: '#fff' }}>
                <Text
                    style={{
                        opacity: 0.6,
                        fontSize: 18,
                        height: 25,
                        marginTop: 10,
                        paddingLeft: 18,
                    }}>
                    Пол:
                </Text>

                <ListItem>
                    <Left>
                        <Text>Мужской</Text>
                    </Left>
                    <Right>
                        <Radio selected={false} />
                    </Right>
                </ListItem>
                <ListItem>
                    <Left>
                        <Text>Женский</Text>
                    </Left>
                    <Right>
                        <Radio selected={true} />
                    </Right>
                </ListItem>
                <Text
                    style={{
                        opacity: 0.6,
                        fontSize: 18,
                        height: 25,
                        marginTop: 10,
                        paddingLeft: 18,
                    }}>
                    Навыки:
                </Text>
                <ListItem>
                    <CheckBox checked={true} />
                    <Body>
                        <Text>Собеседник</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={false} />
                    <Body>
                        <Text>Модельер</Text>
                    </Body>
                </ListItem>

                <Text
                    style={{
                        opacity: 0.6,
                        fontSize: 18,
                        height: 25,
                        marginTop: 10,
                        paddingLeft: 18,
                    }}>
                    Стаж:
                </Text>

                <Form>
                    <Item picker style={{ paddingLeft: 10 }}>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{
                                width: undefined,
                            }}
                            placeholder="Select your SIM"
                            placeholderStyle={{
                                color: '#bfc6ea',
                            }}
                            placeholderIconColor="#007aff"
                            selectedValue={selected2}
                            onValueChange={onValueChange2}>
                            <Picker.Item label="1 год" value="key0" />
                            <Picker.Item label="2 года" value="key1" />
                            <Picker.Item label="5 лет" value="key2" />
                            <Picker.Item label="10 лет" value="key3" />
                            <Picker.Item label="30 лет" value="key4" />
                        </Picker>
                    </Item>
                </Form>
                <Button style={{ bottom: 0 }} onPress={props.onApplyF}>
                    <Text>Применить</Text>
                </Button>
            </View>
        </View>
    );
};
export default class SearchBar extends React.Component {
    //   const onOpenSerach = () => {
    //     this.setState({isOpenSearch: true});
    //   };ff
    constructor(props) {
        super(props);
        this.state = {
            isOpenSearch: false,
            setOpenStatus: false,
            isOpenFilterWindow: false,
        };
    }

    onOpenSearchInput(isOpen) {
        this.setState({ isOpenSearch: isOpen });
    }

    onApplyFilter() {
        this.setState({ isOpenFilterWindow: false });
    }
    onOpenFilterWindow() {
        this.setState({ isOpenFilterWindow: true });
    }

    isRendreSearchButton() {
        if (this.props.search) {
            return (
                <Button
                    transparent
                    onPress={() => {
                        this.onOpenSearchInput(true);
                    }}>
                    <Icon style={styles.icon} name="search" />
                </Button>
            );
        } else {
            return null;
        }
    }
    render() {
        let filterWindow;
        if (this.state.isOpenFilterWindow) {
            filterWindow = (
                <Filter
                    onApplyF={() => {
                        this.onApplyFilter();
                    }}
                />
            );
        } else {
            filterWindow = null;
        }

        if (this.state.isOpenSearch) {
            return (
                <Header transparent searchBar style={styles.header}>
                    <StatusBar
                        translucent
                        backgroundColor="transparent"
                        barStyle="light-content"
                    />
                    <Item style={styles.searchInput}>
                        <Button
                            onPress={() => {
                                this.onOpenSearchInput(false);
                            }}
                            transparent>
                            <Icon
                                style={styles.iconGrey}
                                name="keyboard-arrow-left"
                            />
                        </Button>
                        <Input
                            style={styles.searchInput}
                            placeholder="Search"
                            type="text"
                            onChangeText={text =>
                                this.props.onChangeItemSearch(text)
                            }
                        />
                        <Button
                            transparent
                            style={{
                                marginRight: 10,
                            }}
                            onPress={() => {
                                this.onOpenFilterWindow(true);
                            }}>
                            <Icon style={styles.iconGrey} name="filter-list" />
                        </Button>
                    </Item>
                    {filterWindow}
                </Header>
            );
        } else {
            return (
                <Header transperent searchBar style={styles.header}>
                    <StatusBar
                        translucent
                        backgroundColor={styleConstants.statusBarBackground}
                        barStyle="dark-content"
                    />
                    <Left>
                        <Button transparent onPress={this.props.onBackScreen}>
                            <Icon style={styles.icon} name="arrow-back" />
                            <Title style={styles.textHeader}>Back</Title>
                        </Button>
                    </Left>
                    <Right>{this.isRendreSearchButton()}</Right>
                </Header>
            );
        }
    }
}
const styles = StyleSheet.create({
    icon: {
        fontSize: hp('4.5%'),
        color: styleConstants.headerFontColor,
    },
    iconGrey: {
        fontSize: hp('4.2%'),
        color: styleConstants.headerFontColor,
    },
    textHeader: {
        marginLeft: wp('2%'),
        color: styleConstants.headerFontColor,
        fontSize: hp('3.0%'),
    },
    header: {
        zIndex: 12,
        top: hp('1%'), //  ios !!!
        height: hp('12%'),
        paddingTop: hp('4%'), //  ios !!!
        borderBottomWidth: 0, //  ios !!!
        backgroundColor: styleConstants.headerBackground,
    },
    searchInput: {
        zIndex: 12,
        height: hp('5%'),
        top: 0,
        fontSize: hp('2.5%'),
        padding: 0,
        borderRadius: 60,
        backgroundColor: '#ddd',
    },
});
