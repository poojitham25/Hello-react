import React, { Component } from 'react';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';
import './App.css';
import TodoEmptyMessage from './Components/TodoEmptyMessage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, content: 'buy milk' },
        { id: 2, content: 'play games' }
      ],
      todo: '',
      editItem: false,
      isEmpty: false
    }
  }

  addTodo = (todo) => {
    let updatedTodos = [...this.state.todos, todo];
    this.setState({
      todos: updatedTodos
    });
  }

  editTodo = (id) => {
    const filteredItems = this.state.todos.filter(item => item.id !== id);
    const selectedItem = this.state.todos.find(item => item.id === id);
    this.setState({
      todos: filteredItems,
      todo: selectedItem.content,
      editItem: true,
      isEmpty: false
    });
  }

  handleClearAll = () => {
    this.setState({
      todos: [],
      isEmpty: false
    });
  };

  handleChange = (e) => {
    this.setState({
      todo: e.target.value,
      isEmpty: false
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.todo === '') {
      this.setState({
        isEmpty: true
      });
      return;
    }
    let data = { id: Math.random(), content: this.state.todo }
    this.addTodo(data);
    this.setState({
      todo: '',
      editItem: false
    })
  }

  deleteTodo = (id) => {
    const updatedTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: updatedTodos,
      isEmpty: false
    });
  }

  render() {
    let { todos } = this.state;
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>

        <Todos
          todos={todos}
          onEditTodo={this.editTodo}
          onDeleteTodo={this.deleteTodo}
          isEmpty={this.state.isEmpty}
        />

        <AddTodo
          onFormSubmit={this.handleSubmit}
          todo={this.state.todo}
          onInputChange={this.handleChange}
          editItem={this.state.editItem}
        />

        <button className="clear-all" onClick={this.handleClearAll}>Clear All</button>
      </div>
    )
  }
}

export default App;
