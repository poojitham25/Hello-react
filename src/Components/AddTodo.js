import React from 'react';

const AddTodo = (props) => {
    return (
        <>
            <form onSubmit={props.onFormSubmit}>
                <label className="add-item">Add new Todo:</label>
                <input type="text" value={props.todo} onChange={props.onInputChange} />
                {props.editItem ?
                    <button className="edit-item-btn" type="submit">Edit Item</button> :
                    <button className="add-btn" type="submit">Add Item</button>}
            </form>
        </>
    )
}

export default AddTodo;