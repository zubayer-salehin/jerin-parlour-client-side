import React, { useEffect, useState } from 'react';
import Footer from '../../shared/Footer';
import Loading from '../../shared/Loading/Loading';
import Banner from './Banner';
import Contact from './Contact';
import Services from './Services';
import Summary from './Summary';
import Testimonials from './Testimonials';

const Home = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, [500])
    }, [])

    return (loading ? <Loading loadingStatus="true"></Loading> :
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