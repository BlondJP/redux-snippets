import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

// class App extends Component {
//   state = {
//     todos: [
//       { id: 1, content: "buy milk" },
//       { id: 2, content: "buy coca" },
//       { id: 3, content: "buy cocaine" },
//       { id: 4, content: "buy Oussama" }
//     ]
//   };

//   deleteTodo = id => {
//     const todos = this.state.todos.filter(todo => todo.id != id);
//     console.log("todos", todos);
//     this.setState({ todos: todos });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Liste des choses à faire</h1>
//         <TodoList
//           todos={this.state.todos}
//           deleteTodo={this.deleteTodo}
//         ></TodoList>
//       </div>
//     );
//   }
// }

const App = () => (
  <div>
    <h2>Choses à faire</h2>
    <TodoList />
    <AddTodoForm />
  </div>
);

export default App;
