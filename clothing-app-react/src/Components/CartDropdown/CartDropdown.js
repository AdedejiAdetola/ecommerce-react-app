import './CartDropdown.scss';

import CustomButton from '../CustomButton/CustomButton';
const CartDropdown = () => {
    return ( 
        <div className='cart-dropdown'>
            <p>wagwan</p>
            <div className='cart-items' />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
     );
}
 
export default CartDropdown;