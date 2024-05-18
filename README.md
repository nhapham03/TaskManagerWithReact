# TaskManagerReactState
 
To ensure the immutability, when updating tasks, the setTasks function is wrritten: (setTasks(prevTasks => [...prevTasks, newTask])). This helps our array updating their objects with its original structure, avoiding unexpected changes.
