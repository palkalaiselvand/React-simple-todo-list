import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './Components/Pages/About';
import Header from './Components/layout/Header';
import Todos from './Components/Todos';
import AddTodoItem from './Components/AddTodoItem';

import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        task: "Work with venkat on WO for 401k Electronic file",
        completed: false
      },
      {
        id: 2,
        task: "Check scoot flight cancellation reimbursment",
        completed: false
      },
      {
        id: 3,
        task: "Inform Anandy about my WFH request",
        completed: false
      }
    ]
  }
  //markFinished
  markFinished = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }
  //delTask
  delTask = (id) => {
    this.setState({ todos: [...this.state.todos.filter((todo) => todo.id !== id)] })
  }
  //addNewTask
  addNewTask = (task) => {
    const newId = this.state.todos.length;
    const newTask = {
      id: newId + 1,
      task,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTask] })
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route  exact path="/" render={props => (
            <React.Fragment>
              <AddTodoItem addNewTask={this.addNewTask} />
              <Todos todoTasks={this.state.todos} markFinished={this.markFinished} delTask={this.delTask} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
