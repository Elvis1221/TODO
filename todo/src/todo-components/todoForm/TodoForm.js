import React from 'react'

import {Input} from "./Input/Input";
import {Button} from "./Button/Button";

import './todoForm.css';


export const TodoForm = ({writeText, addMessage}) =>
  <div className='todo-form'>
  <div>
    <h3>Мои заметки :</h3>
  </div>
  <div className='active-elements'>
    <Input writeText={writeText}/>
    <Button addMessage={addMessage} />
  </div>
</div>;