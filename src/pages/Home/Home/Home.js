import React from 'react';
import Banner from '../Banner/Banner';
import Greetings from '../Greetings/Greetings';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Greetings></Greetings>
            <Services></Services>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;