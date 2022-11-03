import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Certified from '../../Component/Certified/Certified';
import InboundMarketing from '../../Component/InboundMarketing/InboundMarketing';

const Home = () => {
    return (
        <div>
          <Banner></Banner>  
          <Certified></Certified>
          <InboundMarketing></InboundMarketing>
        </div>
    );
};

export default Home;