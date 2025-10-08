import React from 'react';
import Banner from '../Components/Banner';
import Trusted from '../Components/Trusted';
import TrendingApps from '../Components/TrendingApps';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Trusted/>
            <TrendingApps/>
        </div>
    );
};

export default Home;