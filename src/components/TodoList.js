import React from "react";
import { connect } from "react-redux";
import store from "../store";
import { removeTodo } from "../actions/index";

const mapStateToProps = state => ({ todos: state.todos });

const ConnectedTodoList = ({ todos }) => {
  const handleRemoveClick = event =>
    store.dispatch(removeTodo({ todoId: event.target.id }));

  const elements = todos.map(todo => (
    <li key={todo.id}>
      {todo.content}{" "}
      <button id={todo.id} onClick={handleRemoveClick}>
        supp
      </button>{" "}
    </li>
  ));
  return <div className="TodoList">{elements}</div>;
};

const TodoList = connect(mapStateToProps)(ConnectedTodoList);

export default TodoList;
