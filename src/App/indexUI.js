import React                from 'react'
import { TodoCounter }      from '../TodoCounter'
import { TodoSearch }       from '../TodoSearch'
import { TodoList }         from '../TodoList'
import { TodoItem }         from '../TodoItem'
import { TodoCreateButton } from '../TodoCreateButton'

const IndexUI = ({
  loading,
  error,
  total,
  totalCompleted,
  search,
  setSearch,
  todosFilter,
  todos,
  deleteTodo,
  completeTodo,
  setTodos
}) => {
  return (
    <React.Fragment> { /* <></> */}
      
      <TodoCounter 
        total={ total }
        totalCompleted={ totalCompleted }
      />

      <TodoSearch 
        search={ search } 
        setSearch={ setSearch }
      />

      { error && <p>There was an error with your petition</p> }
      { loading && <p>Loading...</p> }
      { ( !loading && !total ) && <p>Please add a To DO!</p> }
      
      <TodoList>
        {
          todosFilter
              .map(  (todo, idx ) => <TodoItem 
                text={ todo.text } 
                key={ todo.text } 
                completed={ todo.completed }
                todos={ todos }
                setTodos={ setTodos }
                id={ idx }
                completeTodo={() => completeTodo( todo.text )}
                deleteTodo={ () => deleteTodo( todo.text ) }
              /> 
            ) 
        }
      </TodoList>

      <TodoCreateButton />

    </React.Fragment>
  )
}

export { IndexUI }