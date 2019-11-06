import React from 'react';
import"./SomeCard.css"

function SomeCard(props) {
  return (
    <div className={`item${props.completed ? " completed" : ""}`} onClick={()=>props.handleToggle(props.id)} style={{border: "3px solid black"}} >
     
    <h2>{props.name}</h2>
       

    </div>
  );
}

export default SomeCard;
