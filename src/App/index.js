import React        from 'react'
import { IndexUI }  from './indexUI'
import './App.css';

// const defaultTodos = [
//   { text: 'Cortar Cebollas', completed: false },
//   { text: 'Study Platxi', completed: true },
//   { text: 'Cry with the Llorona', completed: false }
// ]

function useSaveInLocalStorage ( saveItem, valueItem ) {

  const getTodosLocalStorage = window.localStorage.getItem( saveItem )
  let saveLocalItem

  if( !getTodosLocalStorage ){    
    
    window.localStorage.setItem( saveItem, JSON.stringify( valueItem ) )
    saveLocalItem = valueItem

  } else {
    saveLocalItem = JSON.parse( getTodosLocalStorage ) 
  }

  const [ items, setItems ] = React.useState( saveLocalItem )

  const stringifiedAndUpdateState = ( newTodos ) => {
    
    const newTodosStringifing = JSON.stringify( newTodos )
    
    window.localStorage.setItem( saveItem, newTodosStringifing )
    
    setItems( newTodos )
  }

  return [
    items,
    stringifiedAndUpdateState
  ]

}

function App() {
  // debugger
  
  const [ search, setSearch ] = React.useState( '' )
  const [ todos, setTodos ] = useSaveInLocalStorage( 'TODOS_V1', [{ "text": "Cortar Cebollas", "completed": false }] )  
  const [ item, setItem ] = useSaveInLocalStorage( 'PATITO_V1', 'PATITO' )  

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
    [
      <p>{item}</p>,
    <IndexUI 
      total={ total }
      totalCompleted={ totalCompleted }
      search={ search }
      setSearch={ setSearch }
      todosFilter={ todosFilter }
      todos={ todos }
      setTodos={ setTodos }
      completeTodo={ completeTodo }
      deleteTodo={ deleteTodo }
    />]
  )
}

export default App;
