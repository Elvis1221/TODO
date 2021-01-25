import React, {useState} from 'react';

import {ListMessage} from "./ListMessages/ListMessages";
import {TodoForm} from "./todoForm/TodoForm";

import './todo.css';


export const Todo = () => {
  const [message, setMessage] = useState([]);
  const [writeMessage, setWriteMessage] = useState('');

  const writeText = e => setWriteMessage(e.target.value);

  const addMessage = () => {
    setMessage(() => {
      return [
        ...message,
        {
          message: writeMessage
        }
      ]
    })
  };
  return (
    <div className='todo-list'>
      <TodoForm  addMessage={addMessage} writeText={writeText}/>
      <ListMessage message={message}/>
    </div>
  )
};