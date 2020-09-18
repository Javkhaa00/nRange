import React from 'react';
import HomeLanding from '../containers/homeLanding';
import HomeSubscription from '../containers/homeSubscription';

export const Home = (props) => {

    return (
        <>
            <HomeLanding />
            <HomeSubscription />
        </>
    );
};

export default Home;