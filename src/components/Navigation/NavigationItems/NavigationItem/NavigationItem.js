import React from 'react';
import styleClass from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={styleClass.NavigationItem}>
        <a 
            href={props.link}
            className={props.active? styleClass.active: null}>
            {props.children}
        </a>
    </li>
);

export default navigationItem;