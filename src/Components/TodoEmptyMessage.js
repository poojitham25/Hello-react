import React from 'react';

const TodoEmptyMessage = (props) => {
    return (
        <>
            {props.isEmpty && <div className="message">Please enter some todo item...</div>}
        </>
    )
}

export default TodoEmptyMessage;