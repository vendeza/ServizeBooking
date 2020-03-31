import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'native-base';

const TimeSlot = props => {
    const { styleMap, time, onSlotPressed } = props;
    const styles = {
        ...styleMap.timeslot,
        ...(time.status === 'free'
            ? styleMap.timeslotFree
            : styleMap.timeslotReserved),
    };
    const onSlot = time => {
        if (time.status === 'free') {
            return onSlotPressed(time.time);
        } else {
            return alert('Time is booked');
        }
    };
    return (
        <TouchableOpacity
            style={styleMap.timeslot}
            onPress={() => onSlot(time)}>
            <View style={styles} />
            <Text
                style={
                    time.status === 'free'
                        ? styleMap.textFree
                        : styleMap.textNotFree
                }>
                {time.time}
            </Text>
        </TouchableOpacity>
    );
};

export default TimeSlot;
