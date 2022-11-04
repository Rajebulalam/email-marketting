import React from 'react';
import { Link } from 'react-router-dom';
import announce from '../../assets/images/illustration.png';

const Announce = () => {
    return (
        <section className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto pt-3 py-12'>
            <h2 className='text-center font-bold text-3xl py-10'>All you need to A <br /> single platform</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-14'>
                <div>
                    <h3 className='text-2xl font-bold py-4 pr-0 lg:pr-10'>Homework to help you take action.</h3>
                    <p className='pb-8 pr-0 lg:pr-10'>To prevent procrastination and help you apply what you learn, you'll get manageable homework broken out</p>
                    <Link to='/' className='text-primary font-bold px-4 py-2 border border-primary'>Find Out More</Link>
                </div>
                <div>
                    <h3 className='text-2xl font-bold py-4 pr-0 lg:pr-10'>How to write every email you should be sending.</h3>
                    <p className='pb-8 pr-0 lg:pr-10'>Unsure what emails you should send and what to write in them? Learn about the most important</p>
                    <Link to='/' className='text-primary font-bold px-4 py-2 border border-primary'>Find Out More</Link>
                </div>
                <div>
                    <img src={announce} alt="announceImage" />
                </div>
            </div>
        </section>
    );
};

export default Announce;