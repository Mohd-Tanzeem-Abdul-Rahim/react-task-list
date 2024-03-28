import React, { useState } from "react";

function ToDoItem(props) {
    const [isDone, setIsDone] = useState(false);
    return <div onClick={()=>(isDone?setIsDone(false):setIsDone(true))} style={{textDecoration:isDone?"line-through":"none"}} >
        <li><a href="#">{props.text}</a><span onClick={()=>{
        props.onCheck(props.id)
    }}><a href="#">X</a></span></li>
    </div>
    
}
export default ToDoItem;