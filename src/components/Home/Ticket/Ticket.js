import React from 'react';
import { Link } from 'react-router-dom';
import ticket from '../../../images/ticket/ticket.png'
import './Ticket.css'
const Ticket = () => {
    return (
        <div className='seat'>
            <div>
                <img className='img-fluid p-4' src={ticket} alt="" />
            </div>
            <div>
                <h2 className='booking-text'>GRAB YOUR <span className='seat-text'>SEAT</span></h2>
                <Link to='/booking'><button className='btn-primary booking-btn'>Click here to book your seat</button></Link>
            </div>

        </div>
    );
};

export default Ticket;