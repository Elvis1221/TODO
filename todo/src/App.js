import React from 'react';

import {ToDoList} from "./todo-components/ToDoList";

import './App.css';
import {AddMessage} from "./todo-components/AddMessage";


const App = () => {

  return (
    <div className="App">
      <div className={'todoList'}>
        <div className={'title'}>
          <h3>Мои заметки :</h3>
        </div>
        <ToDoList />
      </div>
    </div>
  );
};

export default App;
