import React, { Component } from 'react'

export default class DeleteTodos extends Component {
    getStyle = () => {
        return{
            marginTop: '100px',
            textAlign: 'center',
            
        }
    }
    render() {
        console.log(this.props.todos[0])
        return (
            <div style={this.getStyle()}>
                { this.props.todos[0]&&
                <button 
                className="btn"
                style={{fontSize: '20px'}}
                onClick={this.props.delSelected}
                >Delete Selected Todos</button>
                }
            </div>
        )
    }
}
