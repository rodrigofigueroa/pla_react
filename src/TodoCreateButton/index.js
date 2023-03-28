import React            from 'react'
import './TodoCreateButton.css'

export const TodoCreateButton = ({ setOpenModal, openModal }) => {
  
  const onHandleButton = ( e ) => {
    // console.log( e )
    setOpenModal( prevState => !prevState )
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