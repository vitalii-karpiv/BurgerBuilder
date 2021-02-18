import React from 'react';

import classes from './Order.module.css'

const Order = props => {
    return (
        <div className={classes.Order}>
            <h4>Your order</h4>
            <p>Ingredients: Salad(1)</p>
            <p>Total price: <strong>USD 5</strong></p>
        </div>
    )
}

export default Order;