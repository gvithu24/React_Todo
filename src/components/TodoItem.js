import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
   
   getStyle = () => {
       return{
           background: '#f4f4f4',
           padding: '10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.t.completed ?
           'line-through' : 'none'
           
       }
   }

   

    render() {

        const {id, title} = this.props.t;

        return (
            <div style={this.getStyle()}>
                <p> 
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
                {title} 
                <button onClick={this.props.delTodo.bind(this, id)} 
                        style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    t: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.array.isRequired

}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor:'pointer',
    float:'right'
}





export default TodoItem
