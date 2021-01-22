import React from "react";

import './input.css';

export const Input = ({writeText}) => {
  return (
    <div>
      <input className={'input'}
             type="text"
             placeholder='Введите заметку'
             onChange={writeText}/>
    </div>
  )
};
