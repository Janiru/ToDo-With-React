import './App.css';
import React, { useState, useEffect } from 'react';

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect (() => {
    filterHandler();  
  }, [todos,status] );


  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed ===true))
        break;

      case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed ===false))
       break;
      default:
        setFilteredTodos(todos);
          break;
      
      
    }
  }

  return ( 
    <div className="App">
      <header>
          <h1>ToDo List</h1>
      </header> 
      <Form
       todos={todos}
       setTodos={setTodos} 
       setInputText={setInputText}
       inputText={inputText}
       setStatus={setStatus}
       
       />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
