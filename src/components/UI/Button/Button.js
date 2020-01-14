import React from 'react';
import styleClass from './Button.css';

const button = (props) => (
    <button 
        disabled = {props.disabled}
        className = {[styleClass.Button, styleClass[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;