import React from 'react';
import { connect } from 'react-redux';

import classes from './BuildControl.module.css';

const BuildControl = props => {

    let disabled = false;
    for(let i in props.ingredients) {
        if(props.type === i) {
            if(!props.ingredients[i]) {
                disabled = true;
            }
        }
    }

    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button
                disabled={disabled}
                onClick={props.removeIngredient} 
                className={classes.Less}>Less</button>
            <button 
                onClick={props.addIngredient} 
                className={classes.More}>More</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients
    }
}

export default connect(mapStateToProps)(BuildControl);