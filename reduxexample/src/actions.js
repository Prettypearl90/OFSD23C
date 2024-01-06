// actions.js
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: {
    text,
  },
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: {
    id,
  },
});
