import React from 'react';
import img from "../../../images/banner/hour.png"
import './Time.css'
const Time = () => {
    return (
        <div className='container container-time'>
            <div className='time row'>
                <div className='col-lg-6 col-md-6 col-12'>
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
                </div>
                <div className='col-lg-6 col-md-6 col-12 '>
                    <img className='img-fluid time-img' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Time;