import React from 'react';
import styleClass from './BuildControl.css';

const buildControl = (props) => (
    <div className={styleClass.BuildControl}>
        <div className={styleClass.Label}>{props.label}</div>
        <button 
            className={styleClass.Less} 
            disabled={props.disabled} 
            onClick={props.removed}>Less</button>
        <button 
            className={styleClass.More} 
            onClick={props.added}>More</button>
    </div>
);

export default buildControl;