import CartActionTypes from './cart.type';

const INITIAL_STATE =  {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN: 
            return {
                ...state, //...state spreads all states and then updates the hidden state.
                hidden: !state.hidden
            };
        
        case CartActionTypes.ADD_ITEM:
            return{
                ...state, //...state spreads all states and then updates the cart item state
                cartItems: [...state.cartItems, action.payload]
            }
            default:
                return state;
    }        
}


export default cartReducer;