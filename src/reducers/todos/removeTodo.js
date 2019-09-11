function removeTodo(state, { payload }) {
  const newState = Object.assign({}, state);
  newState.todos = state.todos.filter(todo => todo.id !== payload.todoId);
  return newState;
}

export default removeTodo;
