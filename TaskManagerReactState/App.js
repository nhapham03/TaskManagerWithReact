import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskManager from './TaskManager'; // Assuming TaskManager component is in the same directory

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>This is my Task Manager!</Text>
      <TaskManager />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
