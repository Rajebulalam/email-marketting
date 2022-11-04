import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Certified from '../../Component/Certified/Certified';
import Conversation from '../../Component/Conversation/Conversation';
import EmailMarketingTool from '../../Component/EmailMarketingTool/EmailMarketingTool';
import GdprCompliant from '../../Component/GdprCompliant/GdprCompliant';
import InboundMarketing from '../../Component/InboundMarketing/InboundMarketing';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Certified></Certified>
      <InboundMarketing></InboundMarketing>
      <GdprCompliant></GdprCompliant>
      <EmailMarketingTool></EmailMarketingTool>
      <Conversation></Conversation>
    </div>
  );
};

export default Home;