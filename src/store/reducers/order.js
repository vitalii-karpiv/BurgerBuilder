import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    orders: [],
    purchased: false,
    error: false
}

const orderReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.id
            }
            return {
                ...state,
                orders: state.orders.concat(newOrder),
                loading: false,
                purchased: true
            }
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false
            }
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.orders
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

export default orderReducer;