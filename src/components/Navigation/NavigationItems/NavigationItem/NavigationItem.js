import React from 'react';
import styleClass from './NavigationItem.css';
import {NavLink} from 'react-router-dom';

const navigationItem = (props) => (
    <li className={styleClass.NavigationItem}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={styleClass.active}>
            {props.children}
        </NavLink>
    </li>
);

export default navigationItem;