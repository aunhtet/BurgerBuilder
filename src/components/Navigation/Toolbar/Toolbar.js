import React from 'react';
import styleClass from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={styleClass.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={styleClass.Logo}>
            <Logo />
        </div>
        <nav className={styleClass.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;

