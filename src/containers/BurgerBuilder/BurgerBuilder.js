import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

export default class BurgerBuilder extends Component {

    state = {
        ingredients : {
            cheese: 2,
            bacon: 2,
            meat: 1,
            salat: 1
        }
    }

    render() {
        const ingredients = this.state.ingredients;
        return (
            <Fragment>
                <Burger ingredients={ingredients}/>
                <BuildControls types={ingredients}/>
            </Fragment>
        )
    }
}

