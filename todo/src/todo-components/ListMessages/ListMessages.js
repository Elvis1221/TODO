import React from 'react'
import {AddMessage} from "../AddMessage/AddMessage";


import './listMessage.css';


export const ListMessage = ({message}) => {
  return (
    <div className={'ListMessages'}>
      {
        message.map((item) => <AddMessage message={item.message}/>)
      }
    </div>
  )
}