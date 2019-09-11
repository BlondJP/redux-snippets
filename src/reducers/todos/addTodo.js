function addTodo(state, { payload }) {
  const newState = {
    todos: state.todos.concat({
      content: payload.content,
      id: payload.id
    })
  };
  return Object.assign({}, state, newState);
}

export default addTodo;
