import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import WebView from 'react-native-webview';
import SearchBar from '../components/SearchBar';
import Layout from '../components/Layout';
import { Content, Text } from 'native-base';
import mainStyles from './styles/main';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { withGlobalContext } from '../commons/ApplicationContext';
class ContactsScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        const position = [51.505, -0.09];
        let html = `
            <div id="myContent">
                <meta name="viewport" content="width=device-width, initial-scale=0.9, maximum-scale=1.0, user-scalable=no" />
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
                <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
                <div id="map"></div>
                <style>
                    #map{
                        width:100%;
                        height:100%;
                        padding:0;
                        margin:0;
                    }
                </style>
                <script>
                    var map = L.map('map').setView([51.505, -0.09], 13);
                    
                    
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        
                    maxZoom: 18,
                        maxZoom: 18,
                    tileSize: 512,
                    zoomOffset: -1
                    }).addTo(map);
                    
                    
                    L.marker([51.5, -0.09]).addTo(map)
                        .bindPopup('Main Servize salon.')
                        .openPopup();
                        L.marker([51.52, -0.08]).addTo(map)
                        .bindPopup('The Servize salon.')
                        .openPopup();
                        L.marker([51.51, -0.08]).addTo(map)
                        .bindPopup('The Servize salon.')
                        .openPopup();
                </script>
            </div>
        `;

        return (
            <Layout navigation={navigate}>
                <SearchBar onBackScreen={() => navigate('Home')} />
                <Text style={mainStyles.titleScreen}>Contacts</Text>
                <Content
                    style={{ flex: 1, color: '#fff' }}
                    contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
                    <View style={styles.container}>
                        <WebView
                            style={styles.webView}
                            source={{ html: html }}
                        />
                    </View>
                    <ScrollView>
                        <View style={styles.containerAdress}>
                            <Text style={styles.h1}>
                                Adresses Servize salons:
                            </Text>
                            <Text style={styles.text}>
                                - 405 Strand, Covent Garden, London WC2R 0NE
                            </Text>
                            <Text style={styles.text}>
                                - Level -2 The Ned 27, Poultry, London EC2R 8AJ
                            </Text>
                            <Text style={styles.text}>
                                - 41 Bow Ln, London EC4M 9DT
                            </Text>
                        </View>
                    </ScrollView>
                </Content>
            </Layout>
        );
    }
}
let styles = StyleSheet.create({
    container: {
        paddingTop: hp(2),
        width: wp(100),
        height: hp(52),
    },
    webView: {
        backgroundColor: 'transparent',
        flex: 1,
        padding: 0,
        marginTop: 0,
    },
    containerAdress: {
        padding: wp(1),
        color: '#eee',
    },
    h1: {
        marginTop: hp(1),
        color: '#eee',
        fontSize: hp('3%'),
    },
    text: {
        marginTop: hp(2),
        color: '#eee',
        fontSize: hp('2.4%'),
    },
});
export default withGlobalContext(ContactsScreen);
