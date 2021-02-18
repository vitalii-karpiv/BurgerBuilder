import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSumary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

export default class Checkout extends Component {

    state = {
        ingredients : {},
        price: 0
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0
        for (let param of query.entries()) {
            if(param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ ingredients, price })
    }

    checkoutCanceling = () => {
        this.props.history.goBack();
    }

    checkoutContinue = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        console.log(this.props)
        return (
            <>
                <CheckoutSummary
                    checkoutCanceling={this.checkoutCanceling}
                    checkoutContinue={this.checkoutContinue}
                    ingredients={this.state.ingredients} />
                <Route 
                    path={`${this.props.match.path}/contact-data`} 
                    exact 
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />)}/>
            </>
        )
    }

}