import React from 'react';
import { Link } from 'react-router-dom';
import conversation from '../../assets/images/conversation.png';

const Conversation = () => {
    return (
        <section className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto pt-3 pb-12 flex-none md:flex justify-center items-center'>
            <div className='w-full mb-10 md:mb-0'>
                <h2 className='text-3xl font-bold py-4 lg:pr-[200px] pr-2'>Start conversations that get replies</h2>
                <p className='pb-8 lg:pr-[200px] pr-2'>Personalize cold emails, automate follow-ups, and engage with leads across all channels.</p>
                <Link to='/' className='text-primary px-4 py-2 border border-primary font-bold'>Learn More</Link>
            </div>
            <div className='w-full'>
                <img className='w-full' src={conversation} alt="conversationImage" />
            </div>
        </section>
    );
};

export default Conversation;