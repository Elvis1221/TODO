import React, {useState} from 'react';

import {ListMessage} from "./listMessages/ListMessages";
import {TodoForm} from "./todoForm/TodoForm";

import './todoList.css';


export const ToDoList = () => {

  const [message, setMessage] = useState([]);
  const [writeMessage, setWriteMessage] = useState('');

  const addMessage = ((writeMessage) => {
    setMessage(() => {
      return [
        ...message,
        {
          message: writeMessage
        }
      ]
    })
  });
  return (
    <div className={'todoList'}>
      <TodoForm writeMessage={writeMessage}
                addMessage={addMessage}
                setWriteMessage={setWriteMessage}/>
      <ListMessage message={message}/>
    </div>
  )
};