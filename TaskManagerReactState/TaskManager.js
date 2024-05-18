import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  // function addTask
  const addTask = () => {
    const newTask = {
      id: Date.now(), // Using timestamp as id 
      title: "New Task",
      completed: false
    };
    setTasks(prevTasks => [...prevTasks, newTask]); // add tasks to tasks array
  };

  // Function to toggle task completion
  const toggleTaskCompletion = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View>
      {/* Button to add a new task */}
      <Button title="Add Task" onPress={addTask} />

      {/* Displaying tasks */}
      {tasks.map(task => (
        <View key={task.id} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => toggleTaskCompletion(task.id)}>
            <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>{task.title}</Text>
          </TouchableOpacity>
          <Button title={task.completed ? "Undo" : "Done"} onPress={() => toggleTaskCompletion(task.id)} />
        </View>
      ))}
    </View>
  );
};

export default TaskManager;
