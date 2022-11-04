import React from 'react';
import './Testimonial.css';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import testimonial from '../../assets/images/Rectangle.png';


const Testimonial = () => {
    return (
        <section className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto pt-3 pt-12'>
            <h2 className='text-center text-2xl font-bold'>Testimonial</h2>
            <p className='text-center pt-3 pb-8 w-full md:w-6/12 mx-auto'>Sign up for Benchmark today to stay focused on the reason you're using email marketing in the first place: bringing your vision to life.</p>

            <Swiper
                slidesPerView={1}
                centerSlide='true'
                fade='true'
                grabCursor='true'
                autoplay={{
                    delay: 2000,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, A11y]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    }
                }}
            >

                <SwiperSlide className='slide slide-second'>
                    <div className='slide-content grid grid-cols-1 md:grid-cols-2 gap-7 items-center bg-accent px-4 md:px-16 mx-0 md:mx-16 pt-10'>
                        <div>
                            <h2 className='text-2xl md:text-4xl font-semibold pr-0 lg:pr-[150px]'>“Customers and interested parties engaged.”</h2>
                        </div>
                        <div>
                            <div>
                                <p className='px-6 md:px-0'>“I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go”</p>
                            </div>
                            <div className='flex items-center py-4'>
                                <div className='mr-4'>
                                    <img src={testimonial} alt="person" />
                                </div>
                                <div>
                                    <h3>King Star</h3>
                                    <p>— Gavin Wieske, Marketing Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide slide-second'>
                    <div className='slide-content grid grid-cols-1 md:grid-cols-2 gap-7 items-center bg-accent px-4 md:px-16 mx-0 md:mx-16 pt-10'>
                        <div>
                            <h2 className='text-2xl md:text-4xl font-semibold pr-0 lg:pr-[150px]'>“Customers and interested parties engaged.”</h2>
                        </div>
                        <div>
                            <div>
                                <p className='px-6 md:px-0'>“I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go”</p>
                            </div>
                            <div className='flex items-center py-4'>
                                <div className='mr-4'>
                                    <img src={testimonial} alt="person" />
                                </div>
                                <div>
                                    <h3>King Star</h3>
                                    <p>— Gavin Wieske, Marketing Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </section>
    );
};

export default Testimonial;