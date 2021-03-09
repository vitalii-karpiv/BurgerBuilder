import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import * as actions from '../../store/actions/index';


class BurgerBuilder extends Component {

    state = {
        purchaseable: false,
        showModal: false,
        sendingOrder: false
    }

    componentDidMount() {
        this.props.onInitIngredients()
    }

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
        this.props.onPurchaseInit()
        this.props.history.push('/checkout')
    }

    render() {

        let burger = this.props.error ? <p>Something went wrong</p> : <Spinner />;

        if(this.props.ingredients) {
            burger = (
                <>
                    <Burger ingredients={this.props.ingredients}/>
                    <BuildControls 
                        removeIngredient={this.props.onRemoveIngredient} 
                        addIngredient={this.props.onAddIngredient} 
                        types={this.props.ingredients}
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
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.price,
        error: state.burgerBuilder.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (ingredientName) => dispatch(actions.addIngredient(ingredientName)),
        onRemoveIngredient: (ingredientName) => dispatch(actions.removeIngredient(ingredientName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onPurchaseInit: () => dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
