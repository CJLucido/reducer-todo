
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
    const [newObj, setNewObj] = useState({})

    const checkCompleted = () => {
        dispatch({type: "COMPLETED"})
    }

    const handleNewNameState = e => {
        setNameState(e.target.value)
    }

    const handleAddObj = () => {
        setNewObj({name: nameState,
            id: Date.now(), 
            completed: false})

            handleSubmit()
    }

    const handleSubmit = () => {
       
        dispatch({type: "CREATE_TODO", payload: newObj
    })
      
    }

  
   
console.log(state)

  return (
    <div >
       
        
{
        //somestate.map
    state.map(todo => (
       
    <SomeCard key={todo.id} completed={todo.completed} name={todo.item}/>
    
    )
            )
            
    }
        <SomeForm handleAddObj={handleAddObj} handleSubmit={handleSubmit} handleNewNameState={handleNewNameState} nameState={nameState}/>
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