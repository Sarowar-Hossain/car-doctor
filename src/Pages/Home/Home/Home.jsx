import React from 'react';
import Banner from '../Banner';
import About from '../../About/About';
import Services from '../../Services/Services';
import Contact_Details from '../../Contact_Details/Contact_Details';
import Products from '../../Products/Products';
import ServiceDetails from '../../Services/ServiceDetails';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact_Details></Contact_Details>
            <Products></Products>
        </div>
    );
};

export default Home;