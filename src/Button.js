import PropTypes from 'prop-types';
//import React from "react";
import './Button.css';

function Button(props) {

    return (
    <button className='Button' onClick={props.actionFunction}>
        {props.name}
    </button>
    )
}

Button.defaultProps = {name:'Button'}

Button.propTypes = {name:PropTypes.string.isRequired}

Button.defaultProps = {actionFunction:()=>alert('no function has been linked')}


export {Button};