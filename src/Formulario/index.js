import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './Formulario.css'

const Formulario = () => {

  const [ valueTodo, setValueTodo ] = React.useState( '' )
  const { setOpenModal, addTodo }   = useContext( TodoContext )

  const onHandleCancel = () => setOpenModal( false )

  const onHandleSub = e => {
    e.preventDefault()
    addTodo( valueTodo )
    setOpenModal( false )
  }

  const onHandleChange = e => setValueTodo( e.target.value )

  return(
    <form onSubmit={ onHandleSub }>
      <h2>Ingresa algun ToDO</h2>
      <textarea 
        placeholder='Escribe la tarea'
        onChange={ onHandleChange }
        value={ valueTodo }
        ></textarea>
      <div>
        <button className='canceled' type='button' onClick={ onHandleCancel }>
          Cancelar
        </button>
        <button className='success' type='submit' disabled={ !valueTodo }>
          Añadir
        </button>
      </div>
    </form>
  )
}

export {
  Formulario
}