import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Doctor.css'
const Doctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctordata.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className='doctor-back'>
            <div className='row doctor-info'>
                {doctors.map(doctor => <div
                    className="col-lg-2 col-md-4.5 col-5 inside "
                    key={doctor.id}
                >

                    <div >
                        <img className='img-fluid mt-2 ' src={doctor.img} alt="" />
                        <p><small>{doctor.category}</small></p>
                        <h3>{doctor.name}</h3>
                        <p>{doctor.description}</p>
                        <div className=''>
                            <i className="fab fa-facebook-f icon-doctor "></i>
                            <i className="fab fa-google icon-doctor "></i>
                            <i className="fab fa-twitter icon-doctor "></i>
                            <i className="fab fa-linkedin-in  icon-doctor"></i>

                        </div>
                        <button className='btn-primary text-white div-btn'>
                            <Link className='btn-deta' to={`/doctor/${doctor.id}`}> Contact</Link>
                        </button>
                    </div>



                </div>)}
            </div>
        </div>
    );
};

export default Doctor;