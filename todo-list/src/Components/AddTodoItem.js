import React, { Component } from 'react'

export class AddTodoItem extends Component {
    state = {
        taskName: ''
    }
    trackChanges = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    //onSave
    onSave = (e) => {
        e.preventDefault();
        this.props.addNewTask(this.state.taskName);
        this.setState({ taskName: '' });
    }
    render() {
        return (
                <div style={{ display: 'flex' }}>
                    <input
                        type="text"
                        name="taskName"
                        placeholder="Add Todo.."
                        style={{ flex: '10' }}
                        value={this.state.taskName}
                        onChange={this.trackChanges}
                    />
                    <button
                        className="btn"
                        style={{ flex: '1' }}
                        onClick={this.onSave}>submit</button>
                </div>
        )
    }
}
export default AddTodoItem