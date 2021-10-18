import React from 'react';
import './Team.css'
import img1 from '../../../images/doctor/team-1.png'
import logo1 from '../../../images/logo/sig.png'
import { Link } from 'react-router-dom';
const Team = () => {
    return (
        <div>
            <div className='team-container'>
                <div className='row w-75 mx-auto'>
                    <div className="col-lg-6 col-md-6 col-12">
                        <p><small>Dr. Stephanie Wosniack</small></p>
                        <h1>OUR <span className='team-title'>TEAM</span></h1>
                        <p>
                            Dr. Stephanie Wosniack is is dedicated to providing her patients with the best possible care. We at MediCare are focused on helping you. After receiving successful care for various aches and pains over the years, Dr. Woshiack found her calling to help others get well.
                        </p>
                        <img className='w-25' src={logo1} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <img className='img-fluid' src={img1} alt="" />
                    </div>

                </div>


            </div>
            <div className='text-center find'>
                <button className='more-info'>FIND OUT MORE</button>
            </div>



            <div className='doctor-section'></div>
        </div>
    );
};

export default Team;