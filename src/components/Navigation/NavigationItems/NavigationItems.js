import React from 'react';
import styleClass from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () => (
    <ul className={styleClass.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>        
        <NavigationItem link="/">Checkout</NavigationItem>        
    </ul>
);


export default navigationItems;