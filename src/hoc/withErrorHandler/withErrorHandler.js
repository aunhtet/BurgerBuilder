import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary';
//import axios from '../../axios-orders';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        state = {
            error :null
        }
        UNSAFE_componentWillMount(){
            this.reqInteceptor = axios.interceptors.response.use( req => {
                this.setState({error: null});
                return req;
            });
            this.resInteceptor = axios.interceptors.response.use(res => res, er => {
                this.setState({error: er});

            });
        }

        componentWillUnmount() {
            console.log('Will unmount', this.reqInteceptor,this.resInteceptor)
            axios.interceptors.request.eject(this.reqInteceptor);
            axios.interceptors.request.eject(this.resInteceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render() {
            return (
                <Auxiliary>
                    <Modal 
                        show={this.state.error}
                        modelClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxiliary>
            );
        }
    } 
}

export default withErrorHandler;