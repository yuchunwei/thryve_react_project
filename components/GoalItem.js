import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// items on the list:
const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
            <View style={styles.listItems}>
                <Text >{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};
// style formatting
const styles = StyleSheet.create({
    listItems: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default GoalItem;

