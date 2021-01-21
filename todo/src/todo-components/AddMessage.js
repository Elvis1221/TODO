import React from 'react';

import './addMessage.css';


export const AddMessage = ({message}) => {
  return (
    <div className={'addMessages'}>
      <li>{message}</li>
      {/*<button onClick={() => console.log('delete')}>*/}
      {/*  <img className={'deleteImg'}*/}
      {/*       src="https://s1.iconbird.com/ico/0612/vistabasesoftwareicons/w256h2561339252558DeleteRed.png" alt=""/>*/}
      {/*</button>*/}
    </div>
  )
};