import React from 'react';
import { Link } from 'react-router-dom';
import './More.css'
const More = () => {
    return (
        <div className='row dissl'>
            <div className='col-lg-6 col-md-12'>
                <h2>MEDICAL NECESSARIES</h2>
                <p>Emergency Medical Services are a system of emergency services committed to delivering emergency and immediate medical care outside of a hospital, transportation to definitive care, in attempt to establish a efficient system by which individuals do not try to transport themselves or administer non-professional medical care.  The primary goal of most Emergency Medical Services is to offer treatment to those in demand of urgent medical care, with the objective of adequately treating the current conditions, or organizing for a prompt transportation of the person to a hospital or place of greater care.

                    Philosophically the term emergency medical service has developed to represent a transition from a simplistic system of vehicles delivering only transportation, to a system by which certified medical care is provided on scene and during transport.  However in some less developed regions, emergency vehicles are still fundamentally a means of transportation to the medical facility that will provide care.</p>
            </div>
            <div className='col-lg-6 col-md-12'>
                <img className='img-fluid' src="https://cloudinary.hbs.edu/hbsit/image/upload/s--sFv3MZbN--/f_auto,c_fill,h_375,w_750,/v20200101/D730ED9CC0AF1A0C18B3499EF75E86D7.jpg" alt="" />
            </div>
            <div className='text-center'>
                <Link to="/home"><button className='btn-primary m-4 text-center'>go back to home</button></Link>
            </div>
        </div>
    );
};

export default More;