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
            {controls.map(elem => {
                return <BuildControl 
                    removeIngredient = { () => props.removeIngredient(elem.type) }
                    addIngredient={ () => props.addIngredient(elem.type) }
                    key={elem.type}
                    label={elem.label} />
            })}
        </div>
    )
}

export default BuildControls;