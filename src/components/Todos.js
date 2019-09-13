import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {

  


    render() {

        return this.props.todos.map((t)=>(
            <TodoItem key={t.id } t={t} 
                markComplete = {this.props.markComplete}
                delTodo = {this.props.delTodo}
                />
        ));
    }

0}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.array.isRequired
}

export default Todos 
