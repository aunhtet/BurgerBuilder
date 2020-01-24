import React, {Component} from 'react';
import styleClass from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {

    // shouldComponentUpdate(nextProps,nextState){
    //     return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    // }

    return (
        <Auxiliary>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div 
                className={styleClass.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' :'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Auxiliary>
    )
}

export default React.memo(modal,(prevProps, nexProps)=> 
                        nexProps.show == prevProps.show && 
                        nexProps.children == prevProps.children);