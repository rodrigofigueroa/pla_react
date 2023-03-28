import React from 'react'

function useSaveInLocalStorage ( saveItem, valueItem ) {

  const [ items, setItems ] = React.useState( valueItem )
  const [ error, setError ] = React.useState( false )
  const [ loading, setLoading ] = React.useState( true )

  React.useEffect(() => {
    // debugger
    setTimeout(() =>{

      try {
        
        const getTodosLocalStorage = window.localStorage.getItem( saveItem )
        let saveLocalItem

        if( !getTodosLocalStorage ){        
          
            window.localStorage.setItem( saveItem, JSON.stringify( valueItem ) )
            saveLocalItem = valueItem
            
        }  else {
            saveLocalItem = JSON.parse( getTodosLocalStorage ) 
            
          }
        
        
        setItems( saveLocalItem )
        setLoading( false )
        
      } catch ( error ) { 
        console.error( 'There was an error' )
        setError(error)
      }
      

    }, 1000 )
    
  }, [])


  

  const stringifiedAndUpdateState = ( newTodos ) => {

    try {

      const newTodosStringifing = JSON.stringify( newTodos )
      
      window.localStorage.setItem( saveItem, newTodosStringifing )
      
      setItems( newTodos )
    } catch ( error ) {
      console.log( error )
      setError( error )
    }
    
  }

  return {
    items,
    stringifiedAndUpdateState,
    loading,
    error
  }

}

export { useSaveInLocalStorage }