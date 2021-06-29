import React from 'react';

function Todo({ todo, index, removeTodo }) {
    return (
        <div
            className="todo"
        >
            {todo.text}

            <div>
                <button onClick={() => removeTodo(index)}>X</button>
            </div>
        </div>
    )
}

export default Todo;
