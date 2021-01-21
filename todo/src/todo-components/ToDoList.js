import React, {useState} from 'react';

import './todoList.css';
import {AddMessage} from "./AddMessage";


export const ToDoList = () => {

  const [message, setMessage] = useState([]);
  const [writeMessage, setWriteMessage] = useState('');

  const writeText = (e) => setWriteMessage(e.target.value);
  const renderAddMessage = message.map((item) => <AddMessage message={item.message}/>);


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
    <div>
      <div className={'todoForm'}>
        <div>
          <input className={'input'}
                 type="text"
                 placeholder='Введите заметку'
                 onChange={writeText}/>
        </div>
        <div>
          <button onClick={() => addMessage(writeMessage)} className={'button'}>
            Добавить
          </button>
        </div>
      </div>
      <div>
          {
            renderAddMessage
          }
      </div>
    </div>
  )
};