import React, { Component } from 'react';

import Order from '../../components/Navigation/Order/Order';
import axios from 'axios';

export default class Orders extends Component {

    state = {
        orders: [],
        loading : true,
        error: false
    }

    componentDidMount() {
        axios('https://burgerbuilder-cd277-default-rtdb.firebaseio.com/orders.json')
            .then(res => {
                let fetchedOrders = [];
                for (let i in res.data) {
                    console.log(i)
                    fetchedOrders.push({
                        ...res.data[i],
                        id: i
                    })
                }
                console.log(fetchedOrders)
                this.setState({ loading: false, orders: fetchedOrders })
            })
            .catch(err => this.setState({ loading: false, error: true }))
    }

    render() {
        return (
            <>
                <Order />
                <Order />
            </>
        )
    }
}