import React from "react";

import './input.css';

export const Input = ({setWriteMessage}) => {

  return (
    <div>
      <input className={'input'}
             type="text"
             placeholder='Введите заметку'
             onChange={(e) => setWriteMessage(e.target.value)}/>
    </div>
  )
};
