import * as actionTypes from './actionTypes';

import axios from 'axios';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        id,
        orderData
    }
}

export const purchaseBurgerFail = (message) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        message
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart())
        axios.post("https://burgerbuilder-cd277-default-rtdb.firebaseio.com/orders.json", orderData)
            .then(res => dispatch(purchaseBurgerSuccess(res.data.name, orderData)))
            .catch(err => dispatch(purchaseBurgerFail(err)))
    }

}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error
    }
}

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart())
        axios('https://burgerbuilder-cd277-default-rtdb.firebaseio.com/orders.json')
            .then(res => {
                let fetchedOrders = [];
                for (let i in res.data) {
                    console.log(res.data[i])
                    fetchedOrders.push({
                        ...res.data[i],
                        price: res.data[i].price.toFixed(2),
                        id: i
                    })
                }
                dispatch(fetchOrdersSuccess(fetchedOrders))
            })
            .catch(err => dispatch(fetchOrdersFail(err)))
    }
}