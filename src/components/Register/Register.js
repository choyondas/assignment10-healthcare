import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <div className='regis'>
            <h2>please register</h2>
            <br />
            <input type="text" />
            <br />
            <input type="text" />
            <br />
            <button>submit</button>
            <br />
            <Link to='/login'>Already Registered?</Link>
        </div>
    );
};

export default Register;