import React from 'react';
import './Information.css'
const Information = () => {
    return (
        <div className='section row  w-75'>
            <div className='item col-lg-2 col-md-4 col-md-6 item-1'>
                <h4>Professional staff</h4>
                <p>All of our stuff are professional and experienced more than 5 years. We make sure good survices</p>
                <button className='btn-info'>READ MORE</button>
            </div>
            <div className='item col-lg-2 col-md-4 col-md-6 item-2'>
                <h4>Affordable prices</h4>
                <p>Aliquam sit amet porttitor ex, sit amet pellentesque nibh. Praesent viverra dui augue.</p>
                <button className='btn-info'>VIEW PRICELIST</button>
            </div>
            <div className='item col-lg-2 col-md-4 col-md-6 item-3'>
                <h4>Insurance partners</h4>
                <p>Praesent cursus ligula elit, vitae ullamcorper felis sodales non. Suspendisse ut hendrerit.</p>
                <button className='btn-info'>READ MORE</button>


            </div>
            <div className='item col-lg-2 col-md-4 col-md-6 item-4'>
                <h4>Consult our doctors</h4>
                <p>Select the doctor you prefer and book a visit with him or her in a matter of minutes.</p>
                <button className='btn-info'> <li className="nav-item dropdown decoration-li">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        CHOOSE DOCTOR
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Sussie Wolff</a></li>
                        <li><a className="dropdown-item" href="#">Ashley Wilson</a></li>
                        <li><a className="dropdown-item" href="#">James Fargo</a></li>
                    </ul>
                </li></button>
            </div>
        </div>
    );
};

export default Information;