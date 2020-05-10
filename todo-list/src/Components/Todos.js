import React, { Component } from 'react';
import TodoItem from './TodoItems'

class Todos extends Component {
    render() {
        return this.props.todoTasks.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markFinished={this.props.markFinished} 
            delTask={this.props.delTask}/>
        ));
    }
}

export default Todos;
