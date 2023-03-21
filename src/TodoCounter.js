//import React from "react";
import './TodoCounter.css'


function TodoCounter(props) {

    return props.counter===1?<div>You have 1 task</div>:props.counter===0?<div>You don't have tasks</div>:<div>You have {props.counter} tasks</div>

}

export {TodoCounter};