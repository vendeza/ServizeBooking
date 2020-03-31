import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import * as $STORE from '../store';
import styles from './styles/servize';
import stylesAccordion from './styles/accordion';
import SearchBar from '../components/SearchBar';
import Layout from '../components/Layout';
import { Accordion, Content, Text, Icon } from 'native-base';
import mainStyles from './styles/main';

const renderContext = navigate => item => {
    return (
        <View>
            {item.items.map((e, i) => (
                <TouchableOpacity
                    style={styles.employeeCard}
                    onPress={() =>
                        navigate('Home', { selectedService: e.title })
                    }>
                    <Image style={styles.employeePhoto} source={e.img} />
                    <Text style={styles.nameEmployee}>{e.title}</Text>
                    <Text style={styles.nameEmployee}>{e.price}$</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default class ServiceScreen extends React.Component {
    _renderHeader(item, expanded) {
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
    }

    render() {
        const { navigate } = this.props.navigation;
        const dataArray = [...$STORE.services];
        return (
            <Layout navigation={navigate}>
                <SearchBar
                    onBackScreen={() => navigate('Home')}
                    onChangeItemSearch={name => this.searchEmployee(name)}
                />

                <Text style={mainStyles.titleScreen}>Service</Text>

                <View style={{ display: 'flex' }}>
                    <Accordion
                        style={{
                            zIndex: 10,
                            borderTopColor: 'transperent',
                            borderRightColor: 'rgba(255,255,255, 0.0)',
                            borderRightWidth: 0,
                        }}
                        renderHeader={this._renderHeader}
                        dataArray={dataArray}
                        renderContent={renderContext(navigate)}
                    />
                </View>
            </Layout>
        );
    }
}
