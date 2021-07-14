import React, { useState, Fragment } from 'react';
import TodoItem from './TodoItem';

const Todos = () => {

    const [todoState, setTodoState] = useState([
        {
            id:1,
            text:'Việc làm 1',
            isCompleted:false
        },
        {
            id:2,
            text:'Việc làm 2',
            isCompleted:false
        },
        {
            id:3,
            text:'Việc làm 3',
            isCompleted:false
        },
    ]);

    const updateComplete = (id) => {
        let newArr = todoState.map((_it, _ind) => {
            if(_it.id === id) _it.isCompleted = !_it.isCompleted;
            return _it;
        });

        setTodoState(newArr);
    };

    const deleteTask = (id) => {
        let p = todoState.filter((_value, _inds) => {  return _value.id !== id});
        setTodoState(p);
    };

    return(
        <Fragment>
            {
                todoState.map((_item, _index) => {
                    return <TodoItem key={_item.id} 
                    todoProps={_item} 
                    markCompleteFunc={updateComplete}
                    deleteTaskFunc = {deleteTask}
                    ></TodoItem>
                })
            }
        </Fragment>
    );

}

export default Todos;