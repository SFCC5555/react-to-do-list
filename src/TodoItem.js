//import React from "react";
import './TodoItem.css'
import { useState } from 'react';

function TodoItem(props) {

    let [itemClass,setItemClass] = useState('todoItem');

    let [checkedValue,setCheckedValue] = useState(false);
    
    function markTask() {
        
        if (itemClass==='todoItem') {
            setItemClass('checkItem');
            setCheckedValue(true);
        } else {
            setItemClass('todoItem')
            setCheckedValue(false);
        }
    }


    return (
        <div className='itemSection'>
            <li className={itemClass}>
                {props.name}
            </li>
            <section className='buttonsSection'>
                <input checked={checkedValue} onChange={markTask} className='checkBox' type='checkbox'></input>
                <button onClick={()=>props.actionFunction(props.index)}>x</button>
            </section>
        </div>

    )
}

export {TodoItem};
