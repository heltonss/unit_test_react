import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as TodosActions } from './store/ducks/todos';

class TodoList extends Component {
  state = {
    newTodo: ''
  };

  handleInputChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.newTodo);
    // this.setState({ todos: [...this.state.todos, this.state.newTodo] }, () => {
    //   localStorage.setItem('todos', JSON.stringify(this.state.todos));
    // });
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
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

const mapStateToProps = state => ({
  todos: state.todos.data
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
