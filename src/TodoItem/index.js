import React from 'react'
import './TodoItem.css'

export const TodoItem = ( props ) => {
  
  return (
    <li className='TodoItem'>
      <span className={ `arrow_check ${ props.completed ? 'active' : '' }` }>✓</span>
      <p className={ `${ props.completed ? 'done' : '' }` }>{ props.text }</p>
      <span className={ `cross ${ props.completed ? '' : '' }` }>x</span>
    </li>
  )
}