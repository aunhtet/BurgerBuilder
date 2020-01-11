import React, {Component} from 'react';
import styleClass from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nexProps,nextState){
        return nexProps.show !== this.props.show;
    }

    render() {
        return (
            <Auxiliary>
                <Backdrop show={this.props.show} clicked={this.props.modelClosed}/>
                <div 
                    className={styleClass.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' :'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxiliary>
        )
    }
}

export default Modal;