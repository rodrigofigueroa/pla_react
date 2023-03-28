import React                from 'react'
import { TodoContext }      from './../TodoContext/index'
import { TodoCounter }      from '../TodoCounter'
import { TodoSearch }       from '../TodoSearch'
import { TodoList }         from '../TodoList'
import { TodoItem }         from '../TodoItem'
import { TodoCreateButton } from '../TodoCreateButton'
import { Modal }            from '../Modal'
import { Formulario }       from '../Formulario'

const IndexUI = () => {
  const { openModal, setOpenModal } = React.useContext( TodoContext )
  return (
    <React.Fragment> { /* <></> */}
      
      <TodoCounter 
        // total={ total }
        // totalCompleted={ totalCompleted }
      />

      <TodoSearch 
        // search={ search } 
        // setSearch={ setSearch }
      />

      <TodoContext.Consumer>
        { ({ 
            loading,
            error,
            total,
            todosFilter,
            todos,
            setTodos,
            completeTodo,
            deleteTodo
          }) => (
            <TodoList>
              { error && <p>There was an error with your petition</p> }
              { ( !loading && !total ) && <p>Please add a To DO!</p> }
              { loading && <p>Loading...</p> }
              {
               !loading && todosFilter
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
        )}

      </TodoContext.Consumer>

      <Modal>
        {
          openModal &&
          (<div className="modal_overflow">
                <Formulario />
          </div>)
        }
      </Modal>

      <TodoCreateButton 
        setOpenModal={ setOpenModal }
        openModal={ openModal }
      />

    </React.Fragment>
  )
}

export { IndexUI }