import React                from 'react'
import { TodoCounter }      from './TodoCounter'
import { TodoSearch }       from './TodoSearch'
import { TodoList }         from './TodoList'
import { TodoItem }         from './TodoItem'
import { TodoCreateButton } from './TodoCreateButton'
import './App.css';

const todos = [
  { text: 'Cortar Cebollas', completed: false },
  { text: 'Study Platxi', completed: false },
  { text: 'Cry with the Llorona', completed: false }
]

function App( props ) {
  
  return (
    <React.Fragment> { /* <></> */}
      
      <TodoCounter />

      <TodoSearch />
      
      <TodoList>
        { 
          todos
            .map( 
            todo => <TodoItem text={ todo.text } key={ todo.text } completed={ todo.completed }/> 
          ) 
        }
      </TodoList>

      <TodoCreateButton />

    </React.Fragment>
  );
}

export default App;
