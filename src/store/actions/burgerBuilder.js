
import * as actionTypes from './actionTypes';
//import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = (ings) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ings
    };
};

export const fetchIngredientsFailed = () => {
    return{
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () => {
    return{
        type: actionTypes.INIT_INGREDIENTS
    }

    // return (dispatch) => {
    //     axios.get('https://react-my-burger-2b1f1.firebaseio.com/ingredients.json')
    //         .then((response) => {
    //             dispatch(setIngredients(response.data));
    //         })
    //         .catch((err) => {
    //             dispatch(fetchIngredientsFailed());
    //         });
    // };
};