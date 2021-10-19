import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import "./Login.css"
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className='login-page'>

            <h2>please Login</h2>
            <br />
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            <Link to='register'> New User?</Link>
        </div>
    );
};

export default Login;