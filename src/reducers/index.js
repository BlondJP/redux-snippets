import { ADD_TODO, DELETE_TODO } from "../constants/action-types";
import { removeTodo, addTodo } from "./todos";

const initialState = {
  todos: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action);
    case DELETE_TODO:
      return removeTodo(state, action);
    default:
      console.log("unknown action");
  }

  return state;
}

export default rootReducer;
