import React from 'react';

import BuildControl from "./BuildControl/BuildControl";
import classes from './BuildControls.module.css';

const Capitalize = word => {
    let arr = word.split('');
    let newLetter = arr[0].toUpperCase();
    arr.shift();
    return [newLetter, ...arr].join('');
}

const BuildControls = props => {

    const controls = Object.keys(props.types).map(str => {
        return {label: Capitalize(str), type: str}
    })

    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(elem => {
                return <BuildControl 
                    removeIngredient = { () => props.removeIngredient(elem.type) }
                    addIngredient={ () => props.addIngredient(elem.type) }
                    key={elem.type}
                    label={elem.label} />
            })}
            <button 
                className={classes.OrderButton}
                disabled={!props.purchaseable}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls;