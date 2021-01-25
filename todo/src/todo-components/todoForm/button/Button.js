import React from "react";

import './button.css';


export const Button = ({addMessage})=>
    <div className='button'>
      <button onClick={() => addMessage()} className='button'>
        Добавить
      </button>
    </div>;
