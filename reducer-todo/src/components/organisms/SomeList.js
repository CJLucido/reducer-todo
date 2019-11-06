
import React, {useReducer, useState} from 'react';

//components
import SomeCard from "../molecules/SomeCard"
//import SomeMap from "../molecules/SomeMap"
import SomeForm from "../molecules/SomeForm"

//reducers
import { appReducer, initialState } from "../../reducers/reducer"


function SomeList() {
    const [state, dispatch] = useReducer(appReducer, initialState)
    const [nameState, setNameState] = useState('Input todo here')
   

    const checkCompleted = () => {
        dispatch({type: "COMPLETED"})
    }

    const handleNewNameState = e => {
        setNameState(e.target.value)
    }

 
    const handleSubmit = (e) => {
        e.preventDefault();
  
        dispatch({type: "CREATE_TODO", payload: {item: nameState,
            id: Date.now(), 
            completed: false}
          
    })
      
    }

    const handleToggle =(id) => {
        
        dispatch({type: "COMPLETED", payload: id})
    }
  
   
//console.log(state)

  return (
    <div >
       
        
{
      
    state.map(todo => (
    <SomeCard handleToggle={handleToggle} key={todo.id} id={todo.id} completed={todo.completed} name={todo.item}/>
                        )
            )
            
    }
        <SomeForm  handleSubmit={handleSubmit} handleNewNameState={handleNewNameState} nameState={nameState}/>
    </div>
  );
}

export default SomeList;

// {
//     //somestate.map
// state.map(todo => (
// <SomeCard key={todo.id} completed={todo.completed} name={todo.item}/>

// )
//         )
// }
/////////////////////

// { Object.keys(state).map(todo => (
//     <SomeCard 
//     key={todo.id} 
//     completed={todo.completed} 
//     name={todo.item}/>
    
//     ))}