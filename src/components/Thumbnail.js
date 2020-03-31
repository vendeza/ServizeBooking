import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

const STYLE = StyleSheet.create({
    view: {
        // backgroundColor: 'red',
        width: '100%',
        minHeight: '150px',
        color: '#fff',
        opacity: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(69,85,117,0.7)',
    },
});
//TODO: Прозрачность распростираняется на детей
/**
 * Компонент
 *
 */
const Thumbnail = styles => props => (
    <ImageBackground style={styles.view} source={props.imageSrc}>
        <View style={styles.overlay} />
        {props.children}
    </ImageBackground>
);

export default Thumbnail(STYLE);
