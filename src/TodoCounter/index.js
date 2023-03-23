import React            from 'react'
import { TodoContext }  from '../TodoContext'
import './TodoCounter.css'

// const TodoStylesCounter = {
//   backgroundColor: 'red',
//   textAlign: 'center'
// }

const TodoCounter = () => {
  // const { total, totalCompleted } = props
  const { total, totalCompleted  } = React.useContext( TodoContext )
  return (
    <h1 className="todo_title" >
      Completaste { totalCompleted } de { total }
    </h1>
  )
}

export { TodoCounter }