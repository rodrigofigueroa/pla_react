import React from 'react'
import './TodoSearch.css'

// class Component extends React.Component {
//   constructor(){
//     this.patito = 'Juan'
//   }

//   changeName(){
//     this.setState( 'Enrique' )
//   }

//   render(){
//     return (
//       <button onClick={ this.changeName }>
//         { this.patito }
//       </button>
//     )
//   }
// }

const TodoSearch = () => {

  const [ search, setSearch ] = React.useState( '' )
  
  const onHandleSearch = ( e ) => {
    // console.log( e.target.value )
    setSearch( e.target.value )
  }

  return [
    <input 
      placeholder="Cebolla" 
      className='TodoSearch' 
      value={ search }
      name='search' 
      id="search" 
      onChange={ onHandleSearch }
    />,
    <p style={{
      color: '#fff'
    }}> { search } </p>
  ]
}

export { TodoSearch }