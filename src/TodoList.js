import React, { Component } from 'react';

export default class TodoList extends Component {
  state = {
    newTodo: '',
    todos: []
  };

  handleInputChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    this.setState({ todos: [...this.state.todos, this.state.newTodo] });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        <input
          name="todo"
          onChange={this.handleInputChange}
          value={this.state.newTodo}
        />
        <button onClick={this.handleAddTodo}>adicionar</button>
      </div>
    );
  }
}
