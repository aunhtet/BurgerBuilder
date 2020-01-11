import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styleClass from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

const sideDrawer = (props) =>  {
    let attachedClasses = [styleClass.SideDrawer, styleClass.Close];
    if (props.open){
        attachedClasses = [styleClass.SideDrawer, styleClass.Open];
    }
    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={styleClass.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    );
};


export default sideDrawer;