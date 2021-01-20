import React, {useState} from 'react';

import './todoForm.css';




export const ToDoForm = () => {

  const [message,setMessage]= useState([]);

  const addMessage = (()=> {
    setMessage(()=> {
      return [
        ...message,
        {
          text: '1234'
        }
      ]
    })
  })
  console.log(message)
    return (
      <div className={'todoForm'}>
        <div>
          <input className={'input'}
                 type="text"
                 placeholder='Введите заметку'
          />
        </div>
        <div>
          <button onClick={addMessage} className={'button'}>
            Добавить
          </button>
        </div>
      </div>
    )
  }
;