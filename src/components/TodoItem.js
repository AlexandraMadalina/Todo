import React, { Component } from 'react'

export default class TodoItem extends Component {
    getStyle = () =>{
        return {
            background: 'f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed? 'line-through':'none'
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    <input 
                    type="checkbox"
                    onChange={this.props.markComplete.bind(this, this.props.todo.id)}
                    />
                    {" "}
                    {this.props.todo.title}
                    <button
                    style={btnStyle}
                    onClick={this.props.deleteTodo.bind(this,this.props.todo.id)}
                    >X</button>
                </p>
                
            </div>
        )
    }
}
const btnStyle = {
    background: '#ff0000',
    color : '#fff',
    border: 'none',
    padding: ' 5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
