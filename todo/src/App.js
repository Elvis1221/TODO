import React from 'react';

import {ToDoForm} from "./todo-components/ToDoForm";

import './App.css';


const App = () => {

  return (
    <div className="App">
      <div className={'todoList'}>
        <div className={'title'}>
          <h3>Мои заметки</h3>
        </div>
        <ToDoForm/>
      </div>
    </div>
  );
};

export default App;
