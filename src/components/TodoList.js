import React from "react";
//components

import Todo from "./Todo"

const TodoList = ({ todos, setTodos, filteredTodos }) => {

        return (  
            <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                    setTodos={setTodos}
                    todos={todos}
                    text={todo.text}
                    todo={todo}
                    key={todo.id}
                    /> 
                ))}
            </ul> 
                            
        </div>
        
        );
 
};

export default TodoList;