import React from 'react';
import './InboundMarketing.css';
import enterprise from '../../assets/images/online-payment.png';
import comment from '../../assets/images/chat.png';
import agencies from '../../assets/images/certificate.png';
import institute from '../../assets/images/house.png';
import { Link } from 'react-router-dom';

const InboundMarketing = () => {
    return (
        <section className='w-full lg:w-8/12 px-4 lg:px-6 mx-auto pt-3 pb-12'>
            <div>
                <h2 className='w-full lg:w-7/12 mx-auto text-center text-3xl font-bold text-black'>Inbound marketing solutions for what you need to do</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center py-12'>
                    <div className='px-6 py-4 rounded text-center'>
                        <span className='flex justify-center'> <img src={enterprise} alt="enterprise" /> </span>
                        <p>Enterprise</p>
                    </div>
                    <div className='bg-black px-6 py-4 rounded text-center comment'>
                        <span className='flex justify-center'><img src={comment} alt="comment" /> </span>
                        <p className='text-white'>SMS and self-employed</p>
                    </div>
                    <div className='px-6 py-4 rounded text-center'>
                        <span className='flex justify-center'><img src={agencies} alt="agencies" /> </span>
                        <p className='pt-2'>Agencies</p>
                    </div>
                    <div className='px-6 py-4 rounded text-center'>
                        <span className='flex justify-center'><img src={institute} alt="institute" /> </span>
                        <p className='pt-2'>Institution</p>
                    </div>
                </div>
            </div>

            {/* SMS Bottom Part */}
            <div className='py-6 w-full lg:w-11/12 px-4 lg:px-6 mx-auto'>
                <h3 className='pb-4 text-2xl'>SMS and self-employed</h3>
                <p className='pb-2' style={{ color: '#131416' }}>A tool like Acumbamail is very useful for SMEs and self-employed workers due to its ease of use to manage your campaigns from a single platform, without the need for a large team to carry them out.</p>
                <Link className='text-primary font-medium underline' to='/'>Find Out More</Link>
            </div>
        </section>
    );
};

export default InboundMarketing;