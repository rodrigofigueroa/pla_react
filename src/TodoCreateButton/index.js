import React from 'react'
import './TodoCreateButton.css'

export const TodoCreateButton = () => {

  const onHandleButton = ( e ) => {
    console.log( e )
  }

  return (
    <button 
      className='TodoCreateButton'
      onClick={ onHandleButton }
      >
        +
    </button>
  )
}