import React from 'react';

import './addMessage.css';


export const AddMessage = ({message}) => {
  return (
    <div className={'addMessages'}>
      <li>{message}</li>
    </div>
  )
};