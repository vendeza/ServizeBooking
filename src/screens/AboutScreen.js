import React, { Component } from 'react';
import { View, Image } from 'react-native';
import SearchBar from '../components/SearchBar';
import Layout from '../components/Layout';
import { Content, Text } from 'native-base';
import mainStyles from './styles/main';
import styles from './styles/about';
class AboutScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Layout navigation={navigate}>
                <SearchBar onBackScreen={() => navigate('Home')} />
                <Text style={mainStyles.titleScreen}>About Servize</Text>
                <View
                    style={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        borderRightColor: '#eee',
                        borderRightWidth: 10,
                        zIndex: 12,
                        borderTopRightRadius: 40,
                        alignItems: 'center',
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
                            borderRadius: 400,
                            width: 120,
                            height: 120,
                        }}
                    />
                    <Image
                        style={styles.photo}
                        source={require('../../img/groupPhoto.jpg')}
                    />
                    <Text style={styles.text}>
                        From the second you walk in our doors, you will be
                        greeted by our upbeat, friendly staff. Here at Servize,
                        we offer high quality and budget conscious services. Our
                        a la cart menu allows you to pick and choose the
                        services you want.
                    </Text>
                </View>
            </Layout>
        );
    }
}

export default AboutScreen;
