import React from 'react';
import styleClass from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () => (
    <ul className={styleClass.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>        
        <NavigationItem link="/orders">Orders</NavigationItem>        
        <NavigationItem link="/auth">Login</NavigationItem>        
    </ul>
);


export default navigationItems;