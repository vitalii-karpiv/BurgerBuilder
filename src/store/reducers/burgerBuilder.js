import * as actionTypes from '../actions/actionTypes';

const INGREDIENT_PRICES = {
    cheese: 0.4,
    salad: 0.5,
    meat: 1.3,
    bacon: 0.7
}

const initialState = {
    ingredients: null,
    price: 4.00,
    error: false
}


const burgerBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                price: state.price + INGREDIENT_PRICES[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                price: state.price - INGREDIENT_PRICES[action.ingredientName]
            }
        case actionTypes.FETCHING_INGREDIENTS_FAILS:
            return {
                ...state,
                error: true
            }
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients,
                price: 4.00,
                error: false
            }
        default:
            return state;
    }
}

export default burgerBuilderReducer;