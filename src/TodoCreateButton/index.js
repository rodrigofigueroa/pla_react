import React            from 'react'
import './TodoCreateButton.css'

export const TodoCreateButton = ({
  setOpenModal
}) => {
  
  const onHandleButton = ( e ) => {
    // console.log( e )
    setOpenModal( true )
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