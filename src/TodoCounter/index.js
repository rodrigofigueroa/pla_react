import React from 'react'
import './TodoCounter.css'

// const TodoStylesCounter = {
//   backgroundColor: 'red',
//   textAlign: 'center'
// }

const TodoCounter = ({ total, totalCompleted }) => {
  // const { total, totalCompleted } = props
  return (
    <h1 className="todo_title" >
      Completaste { totalCompleted } de { total }
    </h1>
  )
}

export { TodoCounter }