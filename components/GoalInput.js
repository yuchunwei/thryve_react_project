import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';



const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    // handle input
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    // handle adding goal
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        // modal for main page
        <Modal visible={props.visible} animationType="slide">
            <View style= {styles.inputContainer}>
                <TextInput 
                    placeholder="Business Goals" 
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.btnContainer}>
                    <View style={styles.button}>
                        <Button title='CANCEL' color='#ccc' onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title='ADD' onPress={addGoalHandler}/> 
                    </View>
                    
                </View>
                
             </View>
        </Modal>
        
    );
}
// style formatting
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    input: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;

