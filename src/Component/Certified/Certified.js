import React from 'react';
import upwork from '../../assets/images/Upwork.png';
import warner from '../../assets/images/warnerBros.png';
import woocommerce from '../../assets/images/Woocommercde.png';
import canva from '../../assets/images/Canva.png';
import rbs from '../../assets/images/rbs.png';

const Certified = () => {
    return (
        <section className='pt-10 sm:pt-4 pb-16 w-full lg:w-10/12 px-4 lg:px-6 mx-auto'>
            <div className='flex justify-center lg:justify-between flex-wrap'>
                <img className='w-[100px] mb-2 mr-2 lg:w-auto' src={upwork} alt="upworkImage" />
                <img className='w-[100px] mb-2 mr-2 lg:w-auto' src={warner} alt="warnerImage" />
                <img className='w-[100px] mb-2 mr-2 lg:w-auto' src={woocommerce} alt="woocommerceImage" />
                <img className='w-[100px] mb-2 mr-2 lg:w-auto' src={canva} alt="canvaImage" />
                <img className='w-[100px] mb-2 mr-2 lg:w-auto' src={rbs} alt="rbsImage" />
            </div>
        </section>
    );
};

export default Certified;