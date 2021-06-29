import React, { useState } from 'react';

function App() {
    const [todos, setTodos] = useState([
        {
            text: "Todo 1"
        },
        {
            text: "Todo 2"
        },
        {
            text: "Todo 3"
        }
    ]);

    const addTodo = text => {
        const newTodos = [{ text }, ...todos];
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <div className="todo-list">
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        removeTodo={removeTodo}
                    />
                ))}
            </div>
        </div>
    );

}

export default App;