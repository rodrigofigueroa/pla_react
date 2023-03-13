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
  let todosFilter = ( search.length >= 1 ) ? toSearch : todosFilter = todos
  
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
              .map(  todo => <TodoItem 
                text={ todo.text } 
                key={ todo.text } 
                completed={ todo.completed }
              /> 
            ) 
        }
      </TodoList>

      <TodoCreateButton />

    </React.Fragment>
  );
}

export default App;
