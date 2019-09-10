import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({ todos: state.todos });

const ConnectedTodoList = ({ todos }) => {
  const elements = todos.map(todo => (
    <li key={todo.id}>
      {todo.content}{" "}
      <button id={todo.id} onClick={console.log("rem")}>
        supp
      </button>{" "}
    </li>
  ));
  return <div className="TodoList">{elements}</div>;
};

const TodoList = connect(mapStateToProps)(ConnectedTodoList);

export default TodoList;
