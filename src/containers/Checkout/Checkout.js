import React, { Component } from 'react';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSumary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    checkoutCanceling = () => {
        this.props.history.goBack();
    }

    checkoutContinue = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        let checkout = <Redirect to="/" />
        if (this.props.ingredients) {
            let purchased = this.props.purchased ? <Redirect to='/' /> : null
            checkout = (
                <>
                    {purchased}
                    <CheckoutSummary
                        checkoutCanceling={this.checkoutCanceling}
                        checkoutContinue={this.checkoutContinue}
                        ingredients={this.props.ingredients} />
                    <Route
                        path={`${this.props.match.path}/contact-data`}
                        component={ContactData} />
                </>
            )
        }
        return checkout;
    }

}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.price,
        purchased: state.order.purchased
    }
}

export default connect(mapStateToProps)(Checkout);
