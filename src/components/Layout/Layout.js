import React, {useState} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import styleClass from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';

const layout = (props) => {
    const [sideDrawer, setSideDrawer] = useState(false);
    
    const sideDrawerClosedHandler =() => {
        setSideDrawer(false);
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawer(!sideDrawer);
    }

    return (
        <Auxiliary> 
            <Toolbar 
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer 
                isAuth={props.isAuthenticated}
                open={sideDrawer}
                closed={sideDrawerClosedHandler}/>
            <main className={styleClass.Content}>
                {props.children}
            </main>
        </Auxiliary>)
} 

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(layout);