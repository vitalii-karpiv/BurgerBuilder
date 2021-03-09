import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order/Order';
import * as actions from '../../store/actions/';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

    state = {
        orders: [],
        loading: true,
        error: false
    }

    componentDidMount() {
        this.props.onFetchOrders();
    }

    render() {
        let orders = this.props.error ? <p style={{textAlign: 'center'}}>Something went wrong</p> : <Spinner />;
        if (this.props.orders.length) {
            orders = this.props.orders.map(order => <Order key={order.id} ingredients={order.ingredients} price={order.price} />)
        }

        return orders;
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        error: state.order.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)