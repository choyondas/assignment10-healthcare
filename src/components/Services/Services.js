import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "./Services.css"
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (

        <div className='pt-5 services-section row'>
            <h1 className='mx-auto ser' >SERVICES</h1>

            {

                services.map(service => <div
                    className="col-lg-4 col-md-6  service-item"
                    key={service.id}

                >
                    <div className="mb-5 service-div p-5">
                        <img className='img-fluid' src={service.img} alt="" />
                        <div className='icon-style'>
                            <i class="fas fa-clinic-medical"></i>
                        </div>
                        <p>
                            <small>{service.info}</small>
                        </p>
                        <h3>{service.category}</h3>
                        <p>{service.description}</p>

                        <button className='btn-primary text-white div-btn'>
                            <Link className='btn-deta' to={`/details/${service.id}`}> Details</Link>
                        </button>



                    </div>


                </div>)

            }
        </div>
    );
};

export default Services;