import './CartDropdown.scss';

import CustomButton from '../CustomButton/CustomButton';

import CartItem from '../CartItem/CartItemComponent';

import { connect } from 'react-redux';
const CartDropdown = ({ cartItems }) => {
    return ( 
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                }
            </div> 
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
     );
}

const mapStateToProps = ({ cart: { cartItems }}) => ({
    cartItems
});
 
export default connect(mapStateToProps)(CartDropdown);