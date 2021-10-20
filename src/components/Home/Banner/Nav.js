import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import logo from '../../../images/logo/logo.png';
import './Nav.css'
const Nav = () => {
    const { user, logout } = useAuth();
    return (
        <div >
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
                    <div className="container">
                        <div className=' title'>
                            <a className="navbar-brand" href="#"><img className='img-fluid w-25' src={logo} alt="" /></a>
                            <h2 className='txt-nav' > HEALTH <span className='head-nav'>CARE</span></h2>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto ">

                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "#029d9b"
                                }} className='nav' to="/home">Home</NavLink>


                                <NavLink className='nav' to="/services">Services</NavLink>


                                <NavLink className='nav' to="/about">About</NavLink>



                                <NavLink className='nav' to="/contact">Contact</NavLink>
                                <NavLink className='nav' to="/login">Login</NavLink>

                                <span className='nav text-primary'>{user.displayName} </span>
                                {user?.email && <button className='btn-primary btn-out' onClick={logout} ><span className='nav-out'>log out</span></button>}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    );
};

export default Nav;