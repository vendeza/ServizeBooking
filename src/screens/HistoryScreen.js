import React, { Component } from 'react';
import { FlatList, View, Image, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import Layout from '../components/Layout';
import mainStyles from './styles/main';
import styles from './styles/employee';
import * as $STORE from '../store';
import {
    Content,
    Form,
    CheckBox,
    Radio,
    Picker,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Text,
    Item,
    Thumbnail,
} from 'native-base';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class HistoryScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpenSearch: false,
            loading: true,
            isOpenFilter: false,
            isOpenFilterWindow: false,
            employees: [...$STORE.history],
            fakeData: [...$STORE.history],
        };
        this.searchEmployee = this.searchEmployee.bind(this);
    }

    searchEmployee(name) {
        const filtereData = this.state.fakeData.filter(employee => {
            return (
                employee.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
            );
        });
        this.setState({
            employees: filtereData,
            search: name,
        });
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Layout navigation={navigate}>
                <SearchBar onBackScreen={() => navigate('Home')} />
                <Content
                    style={{ flex: 1, color: '#fff' }}
                    contentContainerStyle={{ flex: 1 }}>
                    <Text style={mainStyles.titleScreen}>History</Text>

                    <View
                        style={{
                            position: 'relative',
                            display: 'flex',
                            flex: 1,
                            borderRightColor: '#eee',
                            borderRightWidth: 10,
                            zIndex: 12,
                            borderTopRightRadius: 40,
                        }}>
                        <View
                            style={{
                                ...mainStyles.bottomCircle,
                                right: -15,
                                top: -10,
                            }}
                        />
                        <View
                            style={{
                                ...mainStyles.topCircle,
                                right: 0,
                                top: 0,
                                width: 150,
                                height: 150,
                            }}
                        />
                        <FlatList
                            style={{ ...styles.container, borderRightWidth: 0 }}
                            data={this.state.employees}
                            renderItem={({ item }) => (
                                //TODO: ВЫНЕСТИ В ОТДЕЛЬНЙ КОМПОНЕНТ
                                //TODO: ОТФОРМАТИРОВАТЬ СТИЛИ И ВЫНЕСТИ ОТСЮДАВА
                                <TouchableOpacity
                                    style={{
                                        ...styles.employeeCard,
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                    }}
                                    onPress={() =>
                                        navigate('Home', {
                                            selectedEmployee: item.name,
                                        })
                                    }>
                                    <Thumbnail
                                        style={styles.employeePhoto}
                                        source={require('../../img/hardy.jpg')}
                                    />
                                    <View
                                        style={{
                                            flex: 1,
                                            marginLeft: hp('2%'),
                                        }}>
                                        <Text
                                            style={{
                                                ...styles.nameEmployee,
                                                ...styles.options,
                                                flexDirection: 'row',
                                            }}>
                                            Услуга:
                                        </Text>
                                        <Text
                                            style={{
                                                ...styles.nameEmployee,
                                                ...styles.options,
                                                flexDirection: 'row',
                                            }}>
                                            {item.title}
                                        </Text>
                                    </View>

                                    <View
                                        style={{
                                            flex: 1,
                                        }}>
                                        <Text
                                            style={{
                                                ...styles.nameEmployee,
                                                ...styles.options,
                                                flexDirection: 'row',
                                            }}>
                                            Мастер:
                                        </Text>
                                        <Text
                                            style={{
                                                ...styles.nameEmployee,
                                                ...styles.options,
                                                flexDirection: 'row',
                                            }}>
                                            {item.nameEmployee}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flex: 1,
                                        }}>
                                        <Text
                                            style={{
                                                ...styles.nameEmployee,
                                                ...styles.options,
                                                flexDirection: 'row',
                                            }}>
                                            Дата:
                                        </Text>
                                        <Text
                                            style={{
                                                ...styles.nameEmployee,
                                                ...styles.options,
                                                flexDirection: 'row',
                                            }}>
                                            {item.date}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flex: 1,
                                        }}>
                                        <Text
                                            style={{
                                                ...styles.nameEmployee,
                                                ...styles.options,
                                                flexDirection: 'row',
                                            }}>
                                            Цена:
                                        </Text>
                                        <Text
                                            style={{
                                                ...styles.nameEmployee,
                                                ...styles.options,
                                                flexDirection: 'row',
                                            }}>
                                            {item.price}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                </Content>
            </Layout>
        );
    }
}

export default HistoryScreen;
