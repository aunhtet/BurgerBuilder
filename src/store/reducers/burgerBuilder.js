import * as actionType from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';


const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const initialState ={
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const addIngredient = (state,action) => {
    const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] +1}
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state,updatedState);
}

const removeIngredient = (state,action ) => {
    const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] -1}
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state,updatedState);
}

const setIngredients = (state,action) => {
    return updateObject(state,{    
        ingredients: {
        salad: action.ingredients.salad,
        bacon: action.ingredients.bacon,
        cheese: action.ingredients.cheese,
        meat: action.ingredients.meat
    },
    totalPrice: 4,
    error : false,
    building: false
    });
}

const fetchIngredientsFailed = (state) => {
    return updateObject(state, {error: true});
}

const reducer = (state= initialState, action) => {
    switch(action.type){
        case actionType.ADD_INGREDIENT: 
            return addIngredient(state,action);
        case actionType.REMOVE_INGREDIENT:
            return removeIngredient(state,action);
            // return{
            //     ...state,
            //     ingredients: {
            //         ...state.ingredients,
            //         [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            //     },
            //     totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            // };
        case actionType.SET_INGREDIENTS:
            return setIngredients(state,action);
            // return {
            //     ...state,
                // ingredients: {
                //     salad: action.ingredients.salad,
                //     bacon: action.ingredients.bacon,
                //     cheese: action.ingredients.cheese,
                //     meat: action.ingredients.meat
                // },
                // totalPrice: 4,
                // error : false
            // };
        case actionType.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientsFailed(state);
        default:
            return state;
    }
};

export default reducer;