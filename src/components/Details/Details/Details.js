import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./Details.css"
const Details = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState();
    const [selected, setSelected] = useState();
    useEffect(() => {
        fetch('/servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    useEffect(() => {
        const details = services?.find(service => service.id == serviceId)
        setSelected(details);
    }, [services])

    return (
        <div>
            <div><img className='img-fluid back' src="https://www.masterspublichealth.net/wp-content/uploads/2020/04/How-Do-You-Become-a-Medical-and-Health-Services-Manager-1024x428.jpg" alt="" /></div>
            <div className='details-div row w-75 mx-auto'>
                <div className="col ">

                    <h2 className='text-center p-4'> You are visiting Services no : {serviceId}</h2>


                    <div className='row p-5 justify-center back-det'>
                        <div className='col-lg-7 col-md-6'>
                            <img className='img-fluid img-det' src={selected?.img} alt="" />
                        </div>
                        <div className='col-lg-5 col-md-6'>
                            <h2 className="title-des">{selected?.category}</h2>
                            <p>{selected?.des}</p>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <Link to="/home"><button className='btn-primary m-4 text-center'>go back to home</button></Link>
                </div>
                <div className='text-center'>
                    <Link to="/services"><button className='btn-primary m-4 text-center'>go back to services</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Details;