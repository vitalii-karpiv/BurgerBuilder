import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const Burger = props => {

    let ingredientsArr = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])]
                .map(( _ , i ) => {
                    return <BurgerIngredient key={ingKey + i} type={ingKey} />
                })
        }).reduce((arr, elem) => {
            return arr.concat(elem)
        }, [])


    if(ingredientsArr.length === 0) {
        ingredientsArr = <p>Please choose the ingredient</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredientsArr}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;