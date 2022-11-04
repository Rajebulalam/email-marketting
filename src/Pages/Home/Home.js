import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Certified from '../../Component/Certified/Certified';
import GdprCompliant from '../../Component/GdprCompliant/GdprCompliant';
import InboundMarketing from '../../Component/InboundMarketing/InboundMarketing';

const Home = () => {
    return (
        <div>
          <Banner></Banner>  
          <Certified></Certified>
          <InboundMarketing></InboundMarketing>
          <GdprCompliant></GdprCompliant>
        </div>
    );
};

export default Home;