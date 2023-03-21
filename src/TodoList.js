//import React from "react";
import './TodoList.css'

function TodoList(props) {


    return <div className='todoList'>{props.children}</div>
}


export {TodoList};