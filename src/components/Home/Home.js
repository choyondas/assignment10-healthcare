import React from 'react';
import Banner from './Banner/Banner';
import Nav from './Banner/Nav';
import Doctor from './Doctor/Doctor';


import Information from './Information/Information';
import Services from './Services/Services';
import Team from './Team/Team';
import Time from './Time/Time';



const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <Information></Information>
            <Services></Services>
            <Time></Time>
            <Team></Team>
            <Doctor></Doctor>

        </div>
    );
};

export default Home;