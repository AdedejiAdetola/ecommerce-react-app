import './SignIn.scss';
import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

const SignIn = () => {
    
    // const [state, setState] = useState({
    //     'email': '',
    //     'password': ''
    // })

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        setEmail('');
        setPassword('');
        // setState({
        //     'email':'',
        //     'password':''
        // })
    }


    // const handleChange = e => {

    //     // const [name, value] = e.target;
    //     // setState({[name]: value})
        
    //     setState({[e.target.name]: e.target.value})
    // }
    return ( 
        <div className='signin'>
            <h2 className='title'>I already have an account</h2>
            <p>Sign in with your email and password</p>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    id='email' 
                    type='email' 
                    name='email' 
                    label= 'email'
                    value={email} 
                    handleChange={(e) => {setEmail(e.target.value)}} 
                    required 
                />

                <FormInput 
                    type='password' 
                    name='password' 
                    id='password' 
                    label='password'
                    value={password} 
                    handleChange={(e) => {setPassword(e.target.value)}} 
                    required 
                />

                <CustomButton type='submit'> Sign In </CustomButton>
                
            </form>
        </div>
     );
}
 
export default SignIn;