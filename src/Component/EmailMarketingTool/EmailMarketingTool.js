import React from 'react';
import { Link } from 'react-router-dom';
import emailMarketing from '../../assets/images/section.png';

const EmailMarketingTool = () => {
    return (
        <section className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12 flex-none md:flex justify-between items-center'>
            <div className='w-full'>
                <img src={emailMarketing} alt="emailMarketingImage" />
            </div>
            <div className='w-full px-2 lg:px-16'>
                <h2 className='text-3xl font-bold py-4 lg:pr-16 pr-2'>Have access to a robust email marketing tool.</h2>
                <p className='pb-8 lg:pr-16 pr-2'>If you're reading this, you already have access to a robust email marketing tool.</p>
                <Link to='/' className='text-primary px-4 py-2 border border-primary font-bold'>Learn More</Link>
            </div>
        </section>
    );
};

export default EmailMarketingTool;