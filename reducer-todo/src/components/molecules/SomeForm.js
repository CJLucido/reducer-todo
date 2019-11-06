import React from 'react'


function SomeForm(props){


    return (

        <div>
            <form >

                <label name="todo"/>
                <input onChange={props.handleNewNameState} type="text" name="todo" value={props.nameState}>
                
                </input>
            
                <button type="button" onClick={props.handleSubmit}>Submit Todo</button>
                <button type="button" onClick={props.handleDestroy}>Destroy completed</button>                          
            
            </form>
        
        
        
        </div>
    )
}


export default SomeForm