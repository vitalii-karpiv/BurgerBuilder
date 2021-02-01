import React, {Fragment} from 'react';

import Button from '../../UI/Button/Button';

const OrderSummary = props => {
    const {ingredients} = props;
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {Object.keys(ingredients).map((elem) => {
                    return (
                        <li key={elem}>{elem}: {ingredients[elem]}</li>
                    )
                })}
            </ul>
            <p>Total price: <strong>{props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button color='Danger' clicked={props.cancel}>Cancel</Button>
            <Button color='Success' clicked={props.continue}>Continue</Button>
        </Fragment>
    )
}

export default OrderSummary;