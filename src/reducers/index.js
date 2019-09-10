import { ADD_TODO } from "../constants/action-types";

const initialState = {
  todos: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newState = {
        todos: state.todos.concat({
          content: action.payload.content,
          id: action.payload.id
        })
      };
      return Object.assign({}, state, newState);
    default:
      console.log("unknown action");
  }

  return state;
}

export default rootReducer;
