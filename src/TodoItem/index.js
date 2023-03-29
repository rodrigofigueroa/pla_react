import React        from 'react'
import { TodoIcon } from '../TodoIcon'
import './TodoItem.css'

export const TodoItem = ( props ) => {
  const { todos, setTodos, id, completeTodo, deleteTodo } = props 

  const onHandleCompleted = ( e ) => {
    console.log( `Completaste todo ${ props.text }` )
    const newTodos = todos.map( ( todo, idx2 ) => {
      if( id === idx2 ) {
        todo.completed = true
      }
      return todo
    })
    // console.log(newTodos)
    setTodos( newTodos )
  }

  const onHandleDelete = ( e ) => {
    console.log( `Eliminaste todo ${ props.text }` )
    // Array.from( Array )
    // [ ...todos ]
    const todosSpl = [ ...todos ]
    todosSpl.splice( id, 1 )
    setTodos( todosSpl )
  }

  return (
    <li className='TodoItem'>

      <TodoIcon 
       click={ completeTodo }
       hover={ true }
       estado={ `success ${ props.completed ? 'active' : '' }` }
       >
          ✓
      </TodoIcon>
      
      <p 
        className={ `${ props.completed ? 'done' : '' }` }
        >
          { props.text }
      </p>

      <TodoIcon 
       click={ deleteTodo }
       hover={ true }
       estado={ 'danger' }
       >
          x
      </TodoIcon>
    </li>
  )
}