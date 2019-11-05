import React from 'react'


function SomeForm(props){


    return (

        <div>
            <form>

                <label name="todo"/>
                <input onChange={props.handleNewNameState} type="text" name="todo" value={props.nameState}>
                
                </input>
            
                <button onClick={()=> props.handleAddObj()}>Submit Todo</button>
            
            
            </form>
        
        
        
        </div>
    )
}


export default SomeForm