import React from 'react'
import './TodoIcon.css'

const TodoIcon = ({
  hover,
  children,
  estado,
  click
}) => {
  return (
    <span onClick={ click } className={ 
      `${ hover && 'h' } ${ estado }` 
      }>
      { children }
    </span>
  )
}

export { TodoIcon }