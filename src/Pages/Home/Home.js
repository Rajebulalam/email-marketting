import React from 'react';
import Announce from '../../Component/Announce/Announce';
import Automation from '../../Component/Automation/Automation';
import Banner from '../../Component/Banner/Banner';
import Certified from '../../Component/Certified/Certified';
import Conversation from '../../Component/Conversation/Conversation';
import EmailMarketingTool from '../../Component/EmailMarketingTool/EmailMarketingTool';
import GdprCompliant from '../../Component/GdprCompliant/GdprCompliant';
import InboundMarketing from '../../Component/InboundMarketing/InboundMarketing';
import Testimonial from '../../Component/Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Certified></Certified>
      <InboundMarketing></InboundMarketing>
      <GdprCompliant></GdprCompliant>
      <EmailMarketingTool></EmailMarketingTool>
      <Conversation></Conversation>
      <Automation></Automation>
      <Testimonial></Testimonial>
      <Announce></Announce>
    </div>
  );
};

export default Home;