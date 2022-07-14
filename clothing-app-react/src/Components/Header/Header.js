import { ReactComponent as Logo} from '../../assets/crown.svg';
import { Link } from "react-router-dom";
import './Header.scss';
import { auth } from '../../Firebase/Firebase';

const Header = ( {currentUser} ) => {
    return ( 
        <div className='header'>
            <Link to='/'>
                <Logo className='home'/>
            </Link>

            <div className='options'>
                <Link className="option" to='/shop'>
                    SHOP
                </Link>

                <Link className="option" to='/contact'>
                    CONTACT
                </Link>
                {/* if current user, sign out button displayed, else, sign in button displayed */}
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'> SIGN IN</Link>
                }
            </div>
        </div>
     );
}
 
export default Header;