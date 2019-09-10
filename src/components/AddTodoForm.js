import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addTodo } from "../actions/index";

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
});

class ConnectedAddTodoForm extends Component {
  constructor() {
    super();
    this.state = {
      content: ""
    };
  }

  handleChange = event =>
    this.setState({ [event.target.id]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    const { content } = this.state;
    const id = uuidv1();
    this.props.addTodo({ content, id });
    this.setState({ content: "" });
  };

  render() {
    const { content } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="content">Nouvelle chose à faire</label>
          <input
            type="text"
            className="form-control"
            id="content"
            value={content}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          Ajouter
        </button>
      </form>
    );
  }
}

const AddTodoForm = connect(
  null,
  mapDispatchToProps
)(ConnectedAddTodoForm);

export default AddTodoForm;
