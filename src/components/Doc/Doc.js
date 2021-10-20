import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './Doc.css'


const Doc = () => {

    const { doctorId } = useParams();
    const [doctors, setDoctors] = useState();
    const [select, setSelect] = useState();
    useEffect(() => {
        fetch('/doctorData.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    useEffect(() => {
        const info = doctors?.find(doctor => doctor.id == doctorId)
        setSelect(info);
    }, [doctors])
    return (
        <div>
            <div><img className='img-fluid back' src="https://www.masterspublichealth.net/wp-content/uploads/2020/04/How-Do-You-Become-a-Medical-and-Health-Services-Manager-1024x428.jpg" alt="" /></div>
            <div className='doc-head'>
                <p>{select?.category}</p>
                <h2>{select?.name}</h2>

            </div>
            <div className='w-75 mx-auto row back-deta '>
                <div className='col-lg-4 col-md-12 col-12 details-doctor'>
                    <img className='img-fluid w-100' src={select?.img} alt="" />
                    <div>
                        <p>Book a visit with {select?.name}</p>
                        <h3>WORKING HOURS</h3>
                        <table class="table">
                            <thead>
                                <tr>

                                    <th scope="col">DAY</th>
                                    <th scope="col">TIME</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Monday</th>
                                    <td>8:00 AM – 2:30 PM</td>

                                </tr>
                                <tr>
                                    <th scope="row">Tuesday</th>
                                    <td>8:00 AM – 7:00 PM</td>

                                </tr>
                                <tr>
                                    <th scope="row">Wednesday</th>
                                    <td>8:00 AM – 7:00 PM</td>
                                </tr>
                                <tr>
                                    <th scope="row">Thursday</th>
                                    <td>8:00 AM – 7:00 PM</td>
                                </tr>
                                <tr>
                                    <th scope="row">Friday</th>
                                    <td>8:00 AM – 7:00 PM</td>
                                </tr>
                                <tr>
                                    <th scope="row">Saturday</th>
                                    <td>Closed</td>
                                </tr>
                                <tr>
                                    <th scope="row">Sunday</th>
                                    <td>Closed</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            Contact {select?.name}
                        </p>
                        <h2>CONTACT INFO</h2>
                        <hr />
                        <p><i class="fas fa-phone-alt"></i>  {select?.phone}</p>
                        <p> <i class="fas fa-envelope"></i> {select?.email}</p>
                        <p><i class="far fa-calendar-alt"></i> Book appointment</p>
                    </div>
                </div>
                <div className='col-lg-5 col-md-12 col-12 p-5 '>
                    <br />
                    <hr />
                    <p>{select?.infoDes}</p>
                    <hr />
                    <small>{select?.totalTxt}</small>
                    <br />
                    <small>{select?.more} </small>
                    <hr />
                    <div className=''>
                        <i className="fab fa-facebook-f icon-doctor "></i>
                        <i className="fab fa-google icon-doctor "></i>
                        <i className="fab fa-twitter icon-doctor "></i>
                        <i className="fab fa-linkedin-in  icon-doctor"></i>

                    </div>
                </div>
            </div>
            <br />
            <div className='review-kid'>
                <div className='w-50 mx-auto '>
                    <p>A word from our Children patients</p>
                    <hr />
                    <h2>WHAT KIDS SAY ABOUT DR {select?.name}</h2>
                    <br />
                    <div>

                        <div className='rev row '>
                            <div className='col-lg-6 col-md-6'>
                                <img className='img-kid' src="https://i.ibb.co/D8CxJRj/kid-1.png" alt="" />
                            </div>
                            <div className='col-lg-6 col-md-6'>
                                <p>Dr {select?.name} helped me with my measles, and I was fine within weeks. She’s really great and she’s my favourite doctor!</p>
                                <h5>EMILY, 5 years</h5>
                            </div>
                        </div>
                        <div className='rev row '>
                            <div className='col-lg-6 col-md-6'>
                                <img className='img-kid' src="https://i.ibb.co/WvHR2Mn/kid-2.png" alt="" />
                            </div>
                            <div className='col-lg-6 col-md-6'>
                                <p>Dr {select?.name} helped me with my measles, and I was fine within weeks. She’s really great and she’s my favourite doctor!</p>
                                <h5>EMILY, 5 years</h5>
                            </div>
                        </div>
                        <div className='rev row'>
                            <div className='col-lg-6 col-md-6'>
                                <img className='img-kid img-flex' src="https://i.ibb.co/m6xhsZc/kid-3.pngg" alt="" />
                            </div>
                            <div className='col-lg-6 col-md-6'>
                                <p>Dr {select?.name} helped me with my measles, and I was fine within weeks. She’s really great and she’s my favourite doctor!</p>
                                <h5>EMILY, 5 years</h5>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doc;