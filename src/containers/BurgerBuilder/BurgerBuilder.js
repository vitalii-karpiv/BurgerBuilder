import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        price : 4.00,
        purchaseable: false,
        showModal: false
    }

    updatePurchaseState = (ingredients) => {
        let sum = 0
        let ingredientsKeyArr = Object.keys(ingredients)
        for(let i = 0; i < ingredientsKeyArr.length; i++) {
            sum += ingredients[ingredientsKeyArr[i]]
        }

        this.setState ({ purchaseable: sum > 0})
    }

    showingModalHandler = () => {
        this.setState({ showModal: true })
    }

    hidingModalHandler = () => {
        this.setState({ showModal: false })
    }

    purchaseContinueHandler = () => {
        alert("You continue!");
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
        this.updatePurchaseState(newIngredients);
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
        this.updatePurchaseState(newIngredients);
    }

    render() {
        const ingredients = this.state.ingredients;
        return (
            <Fragment>
                { this.state.showModal && 
                <Modal 
                    show={this.state.showModal}
                    clicked={this.hidingModalHandler}>
                    <OrderSummary 
                        price={this.state.price}
                        ingredients={this.state.ingredients}
                        continue={this.purchaseContinueHandler}
                        cancel={this.hidingModalHandler}/>
                </Modal>}
                <Burger ingredients={ingredients}/>
                <BuildControls 
                    removeIngredient={this.removeIngredientHandler} 
                    addIngredient={this.addIngredientHandler} 
                    types={ingredients}
                    price={this.state.price}
                    purchaseable={this.state.purchaseable}
                    showingModal={this.showingModalHandler}/>
            </Fragment>
        )
    }
}

