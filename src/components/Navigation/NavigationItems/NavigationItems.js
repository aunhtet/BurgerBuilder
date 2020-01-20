import React from 'react';
import styleClass from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
    <ul className={styleClass.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>        
        {props.isAuthenticated ? 
            <NavigationItem link="/orders">Orders</NavigationItem> 
            : null}
        {!props.isAuthenticated ? 
            <NavigationItem link="/auth">Login</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>}
                
    </ul>
);


export default navigationItems;