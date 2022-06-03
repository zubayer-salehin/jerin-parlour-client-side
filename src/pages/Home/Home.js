import React from 'react';
import Footer from '../../shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Services from './Services';
import Summary from './Summary';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Summary></Summary>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;