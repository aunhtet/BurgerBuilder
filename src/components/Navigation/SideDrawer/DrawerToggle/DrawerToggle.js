import React from 'react';
import styleClass from './DrawerToggle.css'


const drawerToggle = (props) => (
    <div className={styleClass.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>

);

export default drawerToggle;