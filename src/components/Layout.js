import React from 'react';

import SafeAreaView from 'react-native-safe-area-view';
import { Platform, StyleSheet, Dimensions } from 'react-native';
import {
    Container,
    Footer,
    FooterTab,
    Button,
    Icon,
    Text,
    View,
} from 'native-base';
import UseLinearGradient from './UseLinearGradient';
// import LinearGradient from 'react-native-linear-gradient';
import {
    Constants,
    Svg,
    Path,
    Defs,
    Stop,
    LinearGradient,
} from 'react-native-svg';
import Wave from 'react-native-waveview';

const ShowFooterMenu = props => {
    if (true) {
        return (
            <Footer style={styles.footer}>
                <FooterTab style={{ backgroundColor: '#DD4A42' }}>
                    <Button vertical>
                        <Icon
                            style={styles.icon}
                            name="apps"
                            onPress={() => props.nav('Home')}
                        />
                        <Text style={styles.text}>Запись</Text>
                    </Button>
                    <Button vertical>
                        <Icon
                            style={styles.icon}
                            name="camera"
                            onPress={() => props.nav('History')}
                        />
                        <Text style={styles.text}>История</Text>
                    </Button>
                    <Button vertical>
                        <Icon
                            style={styles.icon}
                            active
                            name="navigate"
                            onPress={() => props.nav('About')}
                        />
                        <Text style={styles.text}>О нас</Text>
                    </Button>
                    <Button vertical>
                        <Icon
                            style={styles.icon}
                            name="person"
                            onPress={() => props.nav('Contacts')}
                        />
                        <Text style={styles.text}>Филиалы</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    } else {
        return null;
    }
};

const Layout = props => {
    const WIDTH = Dimensions.get('screen').width;
    return (
        <UseLinearGradient
            style={{
                flex: 1,
                display: 'flex',
                position: 'relative',
                padding: 0,
            }}>
            <SafeAreaView />
            <View style={{ flex: 1 }}>{props.children}</View>
        </UseLinearGradient>
    );
};

export default Layout;

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#612232',
    },
    text: {
        color: '#eee',
    },
    icon: {
        color: '#eee',
    },
});

const _styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
        bottom: 0,
        position: 'absolute',
        padding: 0,
    },
    wave: {
        aspectRatio: 1,
        overflow: 'hidden',
        flex: 1,
        height: 400,
        bottom: 0,
        padding: 0,
    },
});
