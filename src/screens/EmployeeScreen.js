import React from 'react';
import { FlatList, View, Image, TouchableOpacity } from 'react-native';
import * as $STORE from '../store';
import mainStyles from './styles/main';
import styles from './styles/employee';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
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
import { withGlobalContext } from '../commons/ApplicationContext';

class EmployeeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpenSearch: false,
            loading: true,
            isOpenFilter: false,
            isOpenFilterWindow: false,
            employees: [...$STORE.employees],
            fakeData: [...$STORE.employees],
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
                <SearchBar
                    onBackScreen={() => navigate('Home')}
                    onChangeItemSearch={name => this.searchEmployee(name)}
                    search={true}
                />

                <Text style={mainStyles.titleScreen}>Employee</Text>
                <View>
                    <View style={mainStyles.bottomCircle} />
                    <View style={mainStyles.topCircle} />

                    <FlatList
                        style={styles.container}
                        data={this.state.employees}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.employeeCard}
                                onPress={() =>
                                    navigate('Home', {
                                        selectedEmployee: item.name,
                                    })
                                }>
                                <Thumbnail
                                    style={styles.employeePhoto}
                                    source={item.photo}
                                />
                                <Text style={styles.nameEmployee}>
                                    {item.name}
                                </Text>
                                <Text
                                    style={{
                                        ...styles.nameEmployee,
                                        ...styles.options,
                                    }}>
                                    {item.experience} years
                                </Text>
                                <Text
                                    style={{
                                        ...styles.nameEmployee,
                                        ...styles.options,
                                    }}>
                                    {item.skills}
                                </Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </Layout>
        );
    }
}

export default withGlobalContext(EmployeeScreen);
