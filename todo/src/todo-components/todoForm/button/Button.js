import React from "react";

import './button.css';



export const Button = ({addMessage,writeMessage})=> {

  return (
    <div className={'button'}>
      <button onClick={() => addMessage(writeMessage)} className={'button'}>
        Добавить
      </button>
    </div>
  )
}
