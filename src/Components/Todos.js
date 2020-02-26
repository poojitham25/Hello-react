import React from 'react';

const Todos = (props) => {
    let { todos, onDeleteTodo, onEditTodo } = props;
    const todoList = todos.length ? (todos.map(todo => {
        return (
            <div className="todo-item" key={todo.id}>
                <span className="todo-content">{todo.content}</span>
                <div className="btn-wrapper">
                    <button className="edit-btn" onClick={() => onEditTodo(todo.id)}>Edit</button>
                    <button className="delete-btn" onClick={() => onDeleteTodo(todo.id)}>Delete</button>
                </div>
            </div>
        )
    })) :
        (<p className="no-todos">You have no Todo's left, yay...!</p>);

    return (
        <>
            {todoList}
        </>
    )
}

export default Todos;