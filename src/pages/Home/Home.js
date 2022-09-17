import React from 'react';
import Footer from '../../shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Services from './Services';
import ChooseUs from './ChooseUs';
import Testimonials from './Testimonials';
import ParlourDescription from './ParlourDescription';
import Portfolio from './Portfolio';
import Team from './Team';
import NewsLetter from './NewsLetter';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <ParlourDescription></ParlourDescription>
            <Portfolio></Portfolio>
            <Team></Team>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;