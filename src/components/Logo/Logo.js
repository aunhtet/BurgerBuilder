import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styleClass from './Logo.css';

const logo = (props) => (
    <div className={styleClass.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="My Burger" />
    </div>
);

export default logo;