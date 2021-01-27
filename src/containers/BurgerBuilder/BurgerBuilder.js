import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    cheese: 0.4,
    salad: 0.5,
    meat: 1.3,
    bacon: 0.7
}

export default class BurgerBuilder extends Component {

    state = {
        ingredients : {
            cheese: 0,
            bacon: 0,
            meat: 0,
            salad: 0
        },
        price : 4.00

    }

    addIngredientHandler = type => {
        let oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const newIngredients = {
            ...this.state.ingredients
        }
        newIngredients[type] = newCount;

        const newPrice = this.state.price + INGREDIENT_PRICES[type]
        this.setState({ ingredients: newIngredients, price: newPrice })
    }

    removeIngredientHandler = type => {
        let oldCount = this.state.ingredients[type];
        let newCount = null;
        let newPrice = null;
        if(!oldCount) {
            newCount = 0;
            newPrice = this.state.price;
        } else {
            newCount = oldCount - 1;
            newPrice = this.state.price - INGREDIENT_PRICES[type]
        }
        
        const newIngredients = {
            ...this.state.ingredients
        }
        newIngredients[type] = newCount;

        this.setState({ ingredients: newIngredients, price: newPrice })
    }

    render() {
        const ingredients = this.state.ingredients;
        return (
            <Fragment>
                <Burger ingredients={ingredients}/>
                <BuildControls 
                    removeIngredient={this.removeIngredientHandler} 
                    addIngredient={this.addIngredientHandler} 
                    types={ingredients}
                    price={this.state.price}/>
            </Fragment>
        )
    }
}

