import React from 'react'
import {AddMessage} from "../addMessage/AddMessage";


import './listMessage.css';


export const ListMessage = ({message}) => {
  return (
    <div className={'listMessages'}>
      {
        message.map((item) => <AddMessage message={item.message}/>)
      }
    </div>
  )
}