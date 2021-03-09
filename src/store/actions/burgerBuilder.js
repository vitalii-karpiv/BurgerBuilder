import axios from 'axios';

import * as actionTypes from './actionTypes';

export const addIngredient = (ingredientName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName
    }
}

export const removeIngredient = (ingredientName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients
    }
}

export const fetchIngredientsFails = () => {
    return {
        type: actionTypes.FETCHING_INGREDIENTS_FAILS
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://burgerbuilder-cd277-default-rtdb.firebaseio.com/ingredients.json')
            .then(res => {
                dispatch(setIngredients(res.data))
            })
            .catch((err) => dispatch(fetchIngredientsFails()))
    }
}