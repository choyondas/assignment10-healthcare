import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    console.log(props.service);
    const { id, category, info, img } = props.service;
    return (
        <div>
            <div className="mb-5 service-div p-5">
                <img className='img-fluid' src={img} alt="" />
                <div className='icon-style'>
                    <i class="fas fa-clinic-medical"></i>
                </div>
                <p>
                    <small>{info}</small>
                </p>
                <h3>{category}</h3>
                <p>{info}</p>


                <Link to={`/details/id`}> Details</Link>

                {/* <div className='detaisl-btn'>
                            <a href="#">Details</a>
                        </div> */}



            </div>

        </div>
    );
};

export default Service;