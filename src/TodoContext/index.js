import React                      from 'react'
import { useSaveInLocalStorage }  from './TodoLocalStorage'

const TodoContext = React.createContext()


function TodoProvider( props ) {

    const [ search, setSearch ] = React.useState( '' )
    
    const { 
      items: todos, 
      stringifiedAndUpdateState: setTodos,
      loading,
      error
    } = useSaveInLocalStorage( 'TODOS_V1', [] )  
    // const [ item, setItem ] = useSaveInLocalStorage( 'PATITO_V1', 'PATITO' )  

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
      <TodoContext.Provider value={{
        loading,
        error,
        total,
        totalCompleted,
        search,
        setSearch,
        todosFilter,
        todos,
        setTodos,
        completeTodo,
        deleteTodo
      }} >

        { props.children }

      </TodoContext.Provider>
    )
}

export {
  TodoContext,
  TodoProvider  
}