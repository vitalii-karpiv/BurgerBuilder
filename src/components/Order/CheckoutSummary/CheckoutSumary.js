import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const CheckoutSummary = props => {
    return (
        <div style={{width: '100%'}} className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button 
                clicked={props.checkoutCanceling}
                color='Danger'
                >Cancel</Button>
            <Button 
                clicked={props.checkoutContinue}
                color='Success'
                >Continue</Button>
        </div>
    )
}

export default CheckoutSummary;