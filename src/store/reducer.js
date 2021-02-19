import * as actionTypes from './actions';

const INGREDIENT_PRICES = {
    cheese: 0.4,
    salad: 0.5,
    meat: 1.3,
    bacon: 0.7
}

const initialState = {
    ingredients : {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    price : 4.00
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGRIDIENT: 
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
        default:
            return state;
    }
}

export default reducer;