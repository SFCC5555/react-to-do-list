//import React from "react";
import './TodoSearch.css'

function TodoSearch(props) {

    return <input value={props.inputContent} onChange={props.handleChange} className='TodoSearch' placeholder='Add a task'/>
}


export {TodoSearch};