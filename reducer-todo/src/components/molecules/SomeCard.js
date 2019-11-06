import React from 'react';


function SomeCard(props) {
  return (
    <div className={toggled} onClick={()=>props.handleToggle(props.id)} style={{border: "3px solid black"}} >
     
    <h2>{props.name}</h2>
       

    </div>
  );
}

export default SomeCard;
