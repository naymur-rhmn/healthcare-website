import React from 'react';
import Banner from '../Banner/Banner';
import Greetings from '../Greetings/Greetings';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Greetings></Greetings>
            <Services></Services>
        </div>
    );
};

export default Home;