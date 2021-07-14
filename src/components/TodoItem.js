import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types'; 

const TodoItem = (props) => {
    const _itemTodo = props.todoProps;
    const _funcUpdateComplete = props.markCompleteFunc;
    const _deleteTaskFunc = props.deleteTaskFunc;

    const styleDiv = {
        background:'#7DEDFF',
        margin:'5px',
        padding:'5px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    };

    const styleText = {
        textDecoration: _itemTodo.isCompleted ? 'line-through' : 'none',
        color:'blue',
        fontSize:'10pt'
    };

    const btnStyle = {
        background:'#ECD662',
        padding:'10px',
        color:'#5D8233',
        marginLeft:'20px',
        borderRadius:'5px'
    };

    return(
        <div style={styleDiv}>
            <input type="checkbox" onChange={_funcUpdateComplete.bind(this, _itemTodo.id)} checked={_itemTodo.isCompleted} /> 
            {' '}
            <p style={styleText}>{_itemTodo.text}</p>
            {' '}
            <button style={btnStyle} onClick={_deleteTaskFunc.bind(this, _itemTodo.id)} type="button">Xóa</button>
        </div> 
    );
};

TodoItem.prototype = {
    todoProps: PropTypes.object.idRequired,
    markCompleteFunc: PropTypes.func.idRequired,
    deleteTaskFunc: PropTypes.func.idRequired,
}

export default TodoItem