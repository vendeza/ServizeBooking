import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

const UseLinearGradient = props => (
    <LinearGradient
        colors={['#E0523A', '#c64d52', '#C82367']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
            flex: 1,
            position: 'relative',
            display: 'flex',
            zIndex: 0,
            padding: 0,
        }}>
        {props.children}
    </LinearGradient>
);

export default UseLinearGradient;
