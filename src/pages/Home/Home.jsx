import React from 'react';
import Banner from '../../components/Banner/Banner';
import TrustedSection from '../../components/TrustedSection/TrustedSection';
import TrendingApps from '../../components/TrendingApps/TrendingApps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrustedSection></TrustedSection>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;