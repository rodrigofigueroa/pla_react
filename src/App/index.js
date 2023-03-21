import React            from 'react'
import { TodoProvider } from '../TodoContext'
import { IndexUI }      from './indexUI'
import './App.css'

// const defaultTodos = [
//   { text: 'Cortar Cebollas', completed: false },
//   { text: 'Study Platxi', completed: true },
//   { text: 'Cry with the Llorona', completed: false }
// ]

function App() {
  
  // console.log( 'before UseEffect ')
  
  // React.useEffect(() => {
  //   console.log('Use Effect :)')
  // }, [])

  // console.log( 'After UseEffect ')
  
  return (
    <TodoProvider >
      <IndexUI />
    </TodoProvider>
  )
}

export default App;
