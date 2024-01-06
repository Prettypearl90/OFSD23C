// TodoList.js
import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './actions';

const TodoList = ({ todos, addTodo, toggleTodo }) => {
  const handleAddTodo = () => {
    const text = prompt('Enter a new todo:');
    if (text) {
      addTodo(text);
    }
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
