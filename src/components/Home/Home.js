import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

import Doctor from './Doctor/Doctor';


import Information from './Information/Information';

import Team from './Team/Team';
import Ticket from './Ticket/Ticket';
import Time from './Time/Time';



const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Information></Information>
            <Services></Services>

            <Time></Time>
            <Ticket></Ticket>
            <Team></Team>
            <Doctor></Doctor>

        </div>
    );
};

export default Home;