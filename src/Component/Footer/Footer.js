import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import mail from '../../assets/images/mail-box.png';

const Footer = () => {
    return (
        <footer className='bg-white py-12'>
            <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto pt-3 py-12'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    <div className='flex justify-center sm:justify-start text-center sm:text-left'>
                        <div>
                            <h2 className='flex items-center justify-center sm:justify-start mr-2 font-bold text-2xl pb-4'>
                                <img src={mail} alt="mailBox" />
                                Mail Maker
                            </h2>
                            <p className='pb-2'>Subscribe to keep up with the latest news</p>
                            <p className='uppercase font-bold pb-4'>Get in touch</p>
                            <div>
                                <FontAwesomeIcon className='text-xl bg-neutral font-bold text-white py-3 px-4 mr-2 rounded-full' icon={faFacebookF}></FontAwesomeIcon>
                                <FontAwesomeIcon className='text-xl text-neutral font-bold border border-neutral hover:bg-neutral hover:text-white p-3 mr-2 rounded-full' icon={faTwitter}></FontAwesomeIcon>
                                <FontAwesomeIcon className='text-xl text-neutral font-bold border border-neutral hover:bg-neutral hover:text-white px-[14px] py-3 mr-2 rounded-full' icon={faLinkedinIn}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center sm:justify-start text-center sm:text-left'>
                        <div>
                            <h2 className='text-2xl pb-4'>Learn</h2>
                            <Link className='block pb-3' to='/'>Our Products</Link>
                            <Link className='block pb-3' to='/'>Tutorial</Link>
                            <Link className='block pb-3' to='/'>Our Service</Link>
                            <Link className='block pb-3' to='/'>Best Feature</Link>
                        </div>
                    </div>
                    <div className='flex justify-center sm:justify-start text-center sm:text-left'>
                        <div>
                            <h2 className='text-2xl pb-4'>Company</h2>
                            <Link className='block pb-3' to='/'>About Us</Link>
                            <Link className='block pb-3' to='/'>Career</Link>
                            <Link className='block pb-3' to='/'>Contact Us</Link>
                            <Link className='block' to='/'>News & Blogs</Link>
                        </div>
                    </div>
                    <div className='flex justify-center sm:justify-start text-center sm:text-left'>
                        <div>
                            <p className='pb-6'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.</p>
                            <div className='flex justify-center sm:justify-start items-center'>
                                <input type="email" name="email" id="email" placeholder='email address' className='shadow-lg bg-accent outline-0 border-0 mr-2 p-2' />
                                <FontAwesomeIcon className='rounded bg-primary px-4 py-3 text-white' icon={faArrowRight}></FontAwesomeIcon>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Footer Bottom Part */}
                <div className='flex-none md:flex justify-between pt-16'>
                    <p style={{ color: 'rgba(0, 0, 0, 0.4)' }} className='text-center md:text-left'>@2022 Besnik. All rights reserved.</p>
                    <p style={{ color: 'rgba(0, 0, 0, 0.4)' }} className='text-center md:text-right'>Partner & Contribute</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;