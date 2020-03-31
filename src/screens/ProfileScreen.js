import React, { Component } from 'react';
import { View } from 'react-native';
import SearchBar from '../components/SearchBar';
import Layout from '../components/Layout';
import { Content, Text } from 'native-base';
class ProfileScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Layout navigation={navigate}>
                <SearchBar onBackScreen={() => navigate('Home')} />
                <Content
                    style={{ flex: 1, color: '#fff' }}
                    contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 20 }}>
                        Profile screen
                    </Text>
                </Content>
            </Layout>
        );
    }
}

export default ProfileScreen;
