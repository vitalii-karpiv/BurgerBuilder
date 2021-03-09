import React from 'react';

import classes from './Order.module.css'

const Order = props => {
    return (
        <div className={classes.Order}>
            <h4>Your order</h4>
            <p>Ingredients: Salad({props.ingredients.salad}), Bacon({props.ingredients.bacon}), Meat({props.ingredients.meat}), Chesse({props.ingredients.cheese})</p>
            <p>Total price: <strong>USD {props.price}</strong></p>
        </div>
    )
}

export default Order;