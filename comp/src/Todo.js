import React, { useState } from 'react';

function TodoList() {
  // Declare a state variable for the todo list
  const [tasks, setTasks] = useState([]);
  // Declare a state variable for the new task input
  const [newTask, setNewTask] = useState('');

  // Function to add a new task to the todo list
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // Function to remove a task from the todo list
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
}

export default TodoList;
