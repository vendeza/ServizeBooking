/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTING } from './src/screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ContextProvider } from './src/commons/ApplicationContext';
import {
    Container,
    Header,
    Content,
    Footer,
    FooterTab,
    Button,
    Icon,
    Text,
    View,
} from 'native-base';

const App = () => {
    MaterialIcons.loadFont();
    Ionicons.loadFont();
    const config = {
        animation: 'spring',
        config: {
            stiffness: 500,
            damping: 500,
            mass: 3,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
            gestureDirection: 'vertical',
        },
    };
    const Stack = createStackNavigator();
    const makeScreen = (id, screenName, screenComponent) => {
        console.log(id, screenName, screenComponent);
        return (
            <Stack.Screen
                key={id}
                name={screenName}
                component={screenComponent}
                options={{
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}
            />
        );
    };

    const getScreens = screenMap =>
        Object.keys(screenMap).map((key, idx) =>
            makeScreen(idx, key, screenMap[key]),
        );
    /**
     *  Эмуляция сервиса конфигураций
     */
    const configurationService = () => ({
        lang: 'ru',
    });

    return (
        <ContextProvider
            style={{ display: 'flex', flex: 1, backgroundColor: '#fff' }}
            global={{ ...configurationService() }}>
            <SafeAreaProvider
                style={{ display: 'flex', flex: 1, backgroundColor: '#fff' }}>
                {global.HermesInternal == null ? null : (
                    <View style={styles.engine}>
                        <Text style={styles.footer}>Engine: Hermasdaes</Text>
                    </View>
                )}
                <NavigationContainer
                    style={{
                        display: 'flex',
                        flex: 1,
                        backgroundColor: '#fff',
                    }}>
                    <Stack.Navigator
                        style={{
                            display: 'flex',
                            flex: 1,
                            backgroundColor: '#fff',
                        }}
                        headerMode="none">
                        {getScreens(ROUTING)}
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </ContextProvider>
    );
};

const styles = StyleSheet.create({
    engine: {
        position: 'absolute',
        right: 0,
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    text: {
        color: '#eee',
    },
});

export default App;
