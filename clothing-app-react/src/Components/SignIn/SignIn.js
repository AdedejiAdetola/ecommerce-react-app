import './SignIn.scss';
import { useState } from 'react';

const SignIn = () => {
    const [state, setState] = useState({
        'email': '',
        'password': ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        setState({
            'email':'',
            'password':''
        })
    }

    const handleChange = e => {
        e.preventDefault();

        //const [name, value] = e.target;

        //setState({[name]: value})
        setState({[e.target.name]: e.target.value})
    }

    console.log(state);
    return ( 
        <div className='signin'>
            <h2>I already have an account</h2>
            <p>Sign in with your email and password</p>

            <form onSubmit={ handleSubmit }>
                <div className='signin_input'>
                    <input id='email' type='email' name='email' value={state.email} onChange={ handleChange } required/>
                    <label htmlFor='email'>E-mail</label>
                </div>
                
                <div className='signin_input'>
                    <input type='password' name='password' id='password' value={state.password} onChange={ handleChange } required/>
                    <label htmlFor='password'>Password</label>
                </div>

                <input type='submit' value='submit'/>
                
            </form>
        </div>
     );
}
 
export default SignIn;