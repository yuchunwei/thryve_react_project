import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [businessGoals, setBusinessGoals] = useState([]);
  const [isAddingMode, setAddingMode] = useState(false);
  // add goal to the list
  const addGoalHandler = goalName => {
    setBusinessGoals(currentGoals =>[
      ...currentGoals, 
      {id: Math.random().toString(), value: goalName}
    ]);
    setAddingMode(false);
  };
  // tap to delete goal on the list
  const deleteGoalhandler = goalId => {
    setBusinessGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id != goalId);
    });
  }
  // cancel to return main page
  const cancelGoalHandler = () => {
    setAddingMode(false);
  };

  return (
    <View style= {styles.screen}>
      <Button title="Add New Goals" onPress={ () => setAddingMode(true)}/>
      <GoalInput 
        visible={isAddingMode} 
        onAddGoal={addGoalHandler} 
        onCancel={cancelGoalHandler} 
      />
      <FlatList
        keyExtractor= {(item, index) => item.id}
        data={businessGoals}
        renderItem={Itemdata =>(
          <GoalItem 
          id={Itemdata.item.id}
          onDelete={deleteGoalhandler}
          title={Itemdata.item.value} 
          />
        )}
      />
    </View>
  );
}
// style formatting
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
