import React from 'react';
import styleClass from './Backdrop.css'

const backdrop = (props) => (
    props.show ? <div onClick={props.clicked} className={styleClass.Backdrop}></div> : null
);

export default backdrop;