import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import axios from 'axios';
import * as actionTypes from '../../store/actions';


class BurgerBuilder extends Component {

    state = {
        purchaseable: false,
        showModal: false,
        sendingOrder: false,
        error: false
    }

    // componentDidMount() {
    //     axios.get('https://burgerbuilder-cd277-default-rtdb.firebaseio.com/ingredients.json')
    //         .then(res => this.setState({ ingredients: res.data }))
    //     console.log(this.props)
    // }

    updatePurchaseable = (ingredients) => {
        let sum = 0
        let ingredientsKeyArr = Object.keys(ingredients)
        for(let i = 0; i < ingredientsKeyArr.length; i++) {
            sum += ingredients[ingredientsKeyArr[i]]
        }

        return sum > 0;
    }

    showingModalHandler = () => {
        this.setState({ showModal: true })
    }

    hidingModalHandler = () => {
        this.setState({ showModal: false })
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout')
    }

    render() {
        const ingredients = this.props.ingredients;

        let burger = <Spinner />;

        if(this.props.ingredients) {
            burger = (
                <>
                    <Burger ingredients={ingredients}/>
                    <BuildControls 
                        removeIngredient={this.props.onRemoveIngredient} 
                        addIngredient={this.props.onAddIngredient} 
                        types={ingredients}
                        price={this.props.price}
                        purchaseable={this.updatePurchaseable(this.props.ingredients)}
                        showingModal={this.showingModalHandler}/>
                </>
            )
        }

        return (
            <Fragment>
                { this.state.showModal && 
                <Modal 
                    show={this.state.showModal}
                    clicked={this.hidingModalHandler}>
                    {this.state.sendingOrder ? 
                        <Spinner /> : this.state.error ?
                            <ErrorMessage /> :
                            <OrderSummary 
                                price={this.props.price}
                                ingredients={this.props.ingredients}
                                continue={this.purchaseContinueHandler}
                                cancel={this.hidingModalHandler}/>
                    }
                    
                </Modal>}
                { burger }
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.price
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (ingredientName) => dispatch({type: actionTypes.ADD_INGRIDIENT, ingredientName }),
        onRemoveIngredient: (ingredientName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
