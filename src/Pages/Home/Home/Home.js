import React from 'react';
import Banner from '../Banner/Banner';

import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Services></Services>
         
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;