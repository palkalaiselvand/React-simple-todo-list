import React, { Component } from 'react'

export default class TodoItems extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            boderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, task } = this.props.todo;
        return (
            <div style={this.getStyle()} >
                <p>
                    <input type="checkbox" onChange={this.props.markFinished.bind(this, id)} /> {' '}
                    {task}
                    <button style={btnStyle} onClick={this.props.delTask.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    boder: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}