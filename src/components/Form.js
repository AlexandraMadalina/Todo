import React, { Component } from 'react'

export default class Form extends Component {
    state ={
        title: ''
    }
    onChange = (e) =>  this.setState({title: e.target.value});
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }
    
    render() {
        return (
            <form 
            onSubmit={this.onSubmit}
            style={{display: 'flex'}}
            >
                <input
                 type="text"
                 style={{flex: '10', padding: '5px'}}
                 value ={this.state.title}
                 onChange={this.onChange}
                 />
                <input
                style={{flex: '1'}}
                type="submit"
                className="btn"
                 />
            </form>
        )
    }
}
