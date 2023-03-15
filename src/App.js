import React                from 'react'
import { TodoCounter }      from './TodoCounter'
import { TodoSearch }       from './TodoSearch'
import { TodoList }         from './TodoList'
import { TodoItem }         from './TodoItem'
import { TodoCreateButton } from './TodoCreateButton'
import './App.css';

const todosDefault = [
  { text: 'Cortar Cebollas', completed: false },
  { text: 'Study Platxi', completed: true },
  { text: 'Cry with the Llorona', completed: false }
]

function App() {
  
  const [ search, setSearch ] = React.useState( '' )

  const [ todos, setTodos ] = React.useState( todosDefault )

  const totalCompleted = todos.filter( todo => !!todo.completed ).length
  const total = todos.length
  
  const regexSearch = new RegExp(`${ search }`,'gi')
  
  const toSearch = todos.filter( todo => regexSearch.test( todo.text ))
  let todosFilter = ( search.length >= 1 ) ? toSearch : todos

  const completeTodo = ( text ) => {
    let newTodos = [ ...todos ]
    const positionTodo = newTodos.findIndex( todo => todo.text === text )
    
    todos[ positionTodo ].completed = true

    setTodos( newTodos )
  }

  const deleteTodo = ( text ) => {
    let newTodo = Array.from( todos )
    const positionTodo = newTodo.findIndex( todo => todo.text === text )
    newTodo.splice( positionTodo, 1 )
    setTodos( newTodo )
  }
  
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
  );
}

export default App;
