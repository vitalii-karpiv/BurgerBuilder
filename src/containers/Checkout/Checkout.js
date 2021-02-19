import React, { Component } from 'react';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSumary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    checkoutCanceling = () => {
        this.props.history.goBack();
    }

    checkoutContinue = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        return (
            <>
                <CheckoutSummary
                    checkoutCanceling={this.checkoutCanceling}
                    checkoutContinue={this.checkoutContinue}
                    ingredients={this.props.ingredients} />
                <Route 
                    path={`${this.props.match.path}/contact-data`} 
                    exact 
                    component={ContactData}/>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.price
    }
}

export default connect(mapStateToProps)(Checkout);
