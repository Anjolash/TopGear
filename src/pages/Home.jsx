import React from 'react';
import CardStats from '../components/cardStats';
import ContactUs from '../components/ContactUs';
import Featured from '../components/Featured';
import Landing from '../components/Landing';
import Popular from '../components/Popular';
import Review from '../components/Review';
import Services from '../components/Services';
import Subscribe from '../components/Subscribe';

const Home = () => {
    return (
        <>
            <Landing />
            <CardStats />
            <Popular />
            <Services />
            <Featured />
            <Subscribe />
            <Review />
            <ContactUs />

            
        </>
    );
}

export default Home;
