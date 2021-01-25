import React from "react";

import './input.css';


export const Input = ({writeText}) =>
    <div>
      <input className='input'
             type="text"
             placeholder='Введите заметку'
             onChange={writeText}/>
    </div>;
