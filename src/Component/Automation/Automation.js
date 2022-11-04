import React from 'react';
import { Link } from 'react-router-dom';

const Automation = () => {
    return (
        <section className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <h2 className='text-center text-3xl font-bold pt-10 pb-4'>Email Marketing <br /> Automation Made Simple</h2>
            <p className='text-center pt-2 pb-12'>Email marketers find success by ignoring best practices and focusing on their customers.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
                <div className='bg-accent px-2 py-12 text-center'>
                    <span className='text-center text-white font-bold rounded-full bg-primary p-2 my-4'>01</span>
                    <h3 className='text-bold text-xl py-7'>Expanding your business</h3>
                    <p>Try out Benchmark for free to discover how simple effective email marketing can be.</p>
                </div>
                <div className='bg-accent px-2 py-12 text-center'>
                    <span className='text-center text-white rounded-full font-bold bg-primary p-2 my-4'>02</span>
                    <h3 className='text-bold text-xl py-7'>Sign up free</h3>
                    <p>Try out Benchmark for free to discover how simple effective email marketing can be.</p>
                </div>
                <div className='bg-accent px-2 py-12 text-center'>
                    <span className='text-center text-white font-bold rounded-full bg-primary p-2 my-4'>03</span>
                    <h3 className='text-bold text-xl py-7'>Explore your options</h3>
                    <p>Try out Benchmark for free to discover how simple effective email marketing can be.</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <Link to='/' className='px-4 py-2 text-primary font-bold border border-primary'>Start Now</Link>
            </div>
        </section>
    );
};

export default Automation;