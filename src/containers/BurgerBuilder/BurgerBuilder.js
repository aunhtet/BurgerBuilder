import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

import axios from '../../axios-orders';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


export class BurgerBuilder extends Component {
    state = {
        purchasing: false
    }

    componentDidMount() {
        // axios.get('https://react-my-burger-2b1f1.firebaseio.com/ingredients.json')
        //     .then((response) => {
        //         this.setState({ingredients: response.data});
        //     })
        //     .catch((err) => {
        //         this.setState({error: true});
        //     });
        this.props.onInitIngredients();
        
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map ((igKey)=> {
                return ingredients[igKey];
            })
            .reduce((sum,el) => {
                return sum + el;
            },0);
        return sum >0 ;
    }

    
    purchaseHandler = () => {
        if (this.props.isAuthenticated){
            this.setState({purchasing:true});
        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    render(){
        const disableInfo = {
            ...this.props.ings
        };
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0;
        }
        let orderSummary = null;
                
        let burger = this.props.error ? <p>Ingredient Can't be Loaded!!</p>: <Spinner />;

        if (this.props.ings) {
            burger = (
                <Auxiliary>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls 
                        ingredientAdded = {this.props.onIngredientAdded}
                        ingredientRemoved = {this.props.onIngredientRemoved}
                        disabled= {disableInfo}
                        purchaseable={this.updatePurchaseState(this.props.ings)}
                        ordered = {this.purchaseHandler}
                        isAuth = {this.props.isAuthenticated}
                        price={this.props.price}/>
                </Auxiliary>);
            orderSummary = 
                    <OrderSummary 
                        ingredients={this.props.ings}
                        purchaseCanclled = {this.purchaseCancelHandler}
                        purchaseContinued = {this.purchaseContinueHandler}
                        price = {this.props.price}/>;
        }
        return(
            <Auxiliary>
                <Modal show={this.state.purchasing} modelClosed={this.purchaseCancelHandler}> 
                    {orderSummary}
                </Modal>
                {burger}                
            </Auxiliary>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded : (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved : (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients : () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));