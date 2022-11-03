import React from 'react';
import dashboard from '../../assets/images/Dashboard.png';

const Banner = () => {
    return (
        <div>
            <div className='bg-accent py-10 pb-[330px]'>
                <div className='w-full lg:w-6/12 px-4 lg:px-6 mx-auto'>
                    <h2 className='text-3xl sm:text-5xl font-bold text-center pb-5'>SMS Marketing and <span className='text-primary'>Email Marketing</span> Made Easy.</h2>
                    <p className='text-center'>You can get started with your marketing automation in a few minutes</p>
                    <div className='text-center py-6'>
                        <input className='px-4 w-[270px] lg:w-[300px] py-2 mr-2 shadow-xl' type="search" name="search" id="search" />
                        <button className='text-white px-3 p-2 bg-black'>Let's Talk</button>
                    </div>
                </div>
            </div>
            <div className='mt-[-310px] flex justify-center'>
                <img src={dashboard} alt="bannerImage" />
            </div>
        </div>
    );
};

export default Banner;