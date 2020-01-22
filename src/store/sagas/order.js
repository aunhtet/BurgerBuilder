import axios from '../../axios-orders';
import * as actions from '../actions/index';
import {put} from 'redux-saga/effects'

export function* purchaseBurgerSaga (action) {
    yield put(actions.purchaseBurgerStart());
    try{
        const response = yield axios.post('/orders.json?auth='+ action.token,action.orderData);
        yield put(actions.purchaseBurgerSuccess(response.data.name,action.orderData))
    }catch(error){
        yield put(actions.purchaseBurgerFailed(error));
    }
}

export function* fetchOrderSaga(action){
    yield put(actions.fetchOrderStart());
    const queryParams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId +'"' ;
    try{
        const response = yield axios.get('/orders.json' + queryParams )
        const fetchedOrder = [];
        for (let key in response.data){
            fetchedOrder.push({
                ...response.data[key],
                id: key
            });
        }
        yield put(actions.fetchOrdersSuccess(fetchedOrder));
    }catch (error){
        yield put(actions.fetchOrderFail(error));
    }
        
}