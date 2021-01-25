import React from 'react'

import {Input} from "./input/Input";
import {Button} from "./button/Button";

import './todoForm.css';


export const TodoForm = ({writeText, addMessage}) =>
  <div className='todoForm'>
  <div>
    <h3>Мои заметки :</h3>
  </div>
  <div className='activeElements'>
    <Input writeText={writeText}/>
    <Button addMessage={addMessage} />
  </div>
</div>;