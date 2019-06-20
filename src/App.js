import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import uuid from 'uuid';
import Todos from './components/Todos';
import DeleteTodos from './components/DeleteTodos';
import './App.css';

export default class App extends Component {
  state ={
    todos: []
  }
  addTodo = (title) =>{
    let todosArr = this.state.todos;
    const newTodo ={
      id: uuid.v4(),
      title,
      completed: false
    }
    console.log(newTodo.id);
    todosArr.push(newTodo);
    this.setState({ todos: todosArr});
    console.log(title);
  }
  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map((todo)=>{
     if(todo.id === id){
      todo.completed = !todo.completed;
      }
      return todo;
    })
  })
  }
  deleteTodo = (id) =>{
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id)});
  }
  delSelected = () =>{
    this.setState({ todos: this.state.todos.filter(todo => todo.completed === false)});
  }
  render() {
    return (
      <div>
        <Header />
        <Form addTodo={this.addTodo} />
        <Todos 
        markComplete={this.markComplete}
        todos={this.state.todos}
        deleteTodo={this.deleteTodo}
         />
         <DeleteTodos
         delSelected={this.delSelected}
         todos={this.state.todos}
          />
      </div>
    )
  }
}

