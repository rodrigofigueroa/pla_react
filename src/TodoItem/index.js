import React from 'react'
import './TodoItem.css'

export const TodoItem = ( props ) => {
  
  const onHandleCompleted = ( e ) => {
    console.log( `Completaste todo ${ props.text }` )
  }

  const onHandleDelete = ( e ) => {
    console.log( `Eliminaste todo ${ props.text }` )
  }

  return (
    <li className='TodoItem'>
      
      <span 
        className={ `arrow_check ${ props.completed ? 'active' : '' }` }
        onClick={ onHandleCompleted }
        >
          ✓
      </span>
      
      <p 
        className={ `${ props.completed ? 'done' : '' }` }
        >
          { props.text }
      </p>
      
      <span 
        className={ `cross ${ props.completed ? '' : '' }` }
        onClick={ onHandleDelete }
        >
          x
      </span>
    </li>
  )
}