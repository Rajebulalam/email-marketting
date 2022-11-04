import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './GdprCompliant.css';
import { Link } from 'react-router-dom';
import person from '../../assets/images/Vector.png';
import location from '../../assets/images/location.png';
import gmail from '../../assets/images/email.png';
import man from '../../assets/images/person.png';

const GdprCompliant = () => {
    return (
        <section className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto pt-3 pb-12'>
            <div className='flex-none md:flex justify-between items-center'>
                {/* Left Part */}
                <div className='w-full'>
                    <h2 className='text-3xl font-bold py-6'>GDPR compliant</h2>
                    <p className='pb-8'>Be completely transparent and GDPR compliant with GetResponse consent fields. Allow your contacts to provide their proper consent right when they sign up.</p>
                    <div className='grid grid-cols-2 gap-4'>
                        <p>
                            <FontAwesomeIcon className='pr-2 font-bold' icon={faCheck}></FontAwesomeIcon>
                            All EU Countries and California
                        </p>
                        <p>
                            <FontAwesomeIcon className='pr-2 font-bold' icon={faCheck}></FontAwesomeIcon>
                            Track changes
                        </p>
                        <p>
                            <FontAwesomeIcon className='pr-2 font-bold' icon={faCheck}></FontAwesomeIcon>
                            Multiple fields creation
                        </p>
                        <p>
                            <FontAwesomeIcon className='pr-2 font-bold' icon={faCheck}></FontAwesomeIcon>
                            Fully integrated
                        </p>
                    </div>
                    <div className='pt-8'>
                        <Link className='px-3 py-2 border border-primary text-primary'>Learn More</Link>
                    </div>
                </div>
                {/* Right Part */}
                <div className='w-full p-7 right-gdpr pl-7 md:pl-[86px] h-[450px]'>
                    <div className='p-4 py-5 mt-10 bg-white right-top rounded-md shadow-xl w-[340px]'>
                        <img style={{ backgroundColor: '#E9F2FF' }} className='p-4 rounded-full' src={person} alt="personIcon" />
                        <h4 className='text-primary font-medium py-2'>Mail Support</h4>
                        <p>Benchmark Email makes the tools you need simple</p>
                        <div className='message bg-primary px-4 py-6 flex justify-between items-center'>
                            <div className='rounded-full mr-4'>
                                <img src={man} alt="personImage" />
                            </div>
                            <div>
                                <p className='text-white'>Sami sent you <span className='font-bold'>Message</span> from Leonard Buyd!</p>
                            </div>
                        </div>
                    </div>
                    <div className='right-bottom p-4 py-5 rounded-md bg-white mt-8 shadow-xl w-[340px]'>
                        <img style={{ backgroundColor: '#E9F2FF' }} className='py-3 px-4 rounded-full' src={location} alt="personIcon" />
                        <h4 className='text-primary font-medium py-2'>Location Tracking</h4>
                        <p>accelerating your business and raising the bar.</p>
                        <div className='email shadow-lg'>
                            <img src={gmail} alt="gmail" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GdprCompliant;