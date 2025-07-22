

// 1. Importaciones
import React, { useState } from 'react'


//2. Se declara el componente 
export const CounterApp = ({value=0}) => {

//3. Se declara el estado 
    const[contador,setContador]=useState(value);

//4.Funcion Manejadora para sumar 
    const handleAdd=()=>{
        
         setContador(contador+1)    
}

//5.Funcion manejadora para restar 

    const handlerest=()=>{

        setContador(contador-1)
    }

//6.Funcion manejadora para resetear    
    const handlereset=()=>{

        setContador(value)
    }

// 5. Estructura JSX la vista 
    return (
    <>  
    <h1>CounterApp</h1>
    <h2> { contador } </h2>
    <div className='button-group'>
         <button onClick={handleAdd}> +1 </button>
         <button onClick={handlerest} > -1 </button>
         <button onClick={handlereset}> Reset </button>
    </div>
   
    </>
  )
}
