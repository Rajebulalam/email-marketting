import React from 'react';
import './LatestNews.css';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <section className='bg-primary bottom-bg py-12'>
            <div className='w-full lg:w-8/12 px-4 lg:px-6 mx-auto pt-3 py-12 flex-none md:flex justify-between items-center'>
                <div className='text-white w-full'>
                    <p>With our free resources you will become an expert in direct marketing. Learn how to get the most out of the tool with our support articles or contact us to solve any questions in no time.</p>
                </div>
                <div className='w-full ml-0 lg:ml-10 px-16'>
                    <div style={{ borderTop: '3px solid #fff' }} className='pb-10 pt-6 flex justify-between items-center'>
                        <p className='text-center'>
                            <span className='text-3xl font-bold text-white block'>120%</span>
                            <span className='text-white'>Lorem ipsum dolor</span>
                        </p>
                        <p className='text-center'>
                            <span className='text-3xl font-bold text-white block'>150%</span>
                            <span className='text-white'>Lorem ipsum dolor</span>
                        </p>
                    </div>
                    <Link to='/' className='text-primary text-center block py-2  w-full bg-white'>Learn More</Link>
                </div>
            </div>
        </section>
    );
};

export default LatestNews;