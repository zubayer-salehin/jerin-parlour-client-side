import React from 'react';
import { EffectFade, Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Testimonials.css";
import slider1 from "../../assets/Slider-Image/slide3.jpg"
import slider2 from "../../assets/Slider-Image/slide4.jpg"

const Banner = () => {
    return (
        <Swiper
            modules={[EffectFade, Navigation, A11y, Autoplay]}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            effect={"fade"}
            loop={true}
            navigation
            slidesPerView={1}>
            <SwiperSlide className='relative'>
                <img className='bannerImage' src={slider1} alt="" />
                <div className='absolute bannerImagePositionSet'>
                    <h2 className='text-left text-4xl sm:text-5xl font-bold text-primary bannerTitleStyle'>BeautyZone Hair Salon <br /> Creating Beauty</h2>
                    <p className='pt-6 pb-6 hidden sm:block'>A Jerin Parlour is an establishment dealing with cosmetic treatments <br /> for men and women. Other variations of this type of business <br /> include hair salons, spas, and medical spas.</p>
                    <div className='mt-6 sm:mt-0'>
                        <button className='px-4 sm:px-7 py-2 sm:py-3.5 mr-3 sm:mr-5 bg-primary text-white text-sm sm:text-base rounded-sm'>Get A Quote</button>
                        <button className='px-4 sm:px-7 py-2 sm:py-3.5 bg-teal-500 text-white text-sm sm:text-base rounded-sm '>About Us</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <img className='bannerImage' src={slider2} alt="" />
                <div className='absolute bannerImagePositionSet'>
                    <h2 className='text-left text-4xl sm:text-5xl font-bold text-primary bannerTitleStyle'>BeautyZone Hair Salon <br /> Creating Beauty</h2>
                    <p className='pt-6 pb-6 hidden sm:block'>A Jerin Parlour is an establishment dealing with cosmetic treatments <br /> for men and women. Other variations of this type of business <br /> include hair salons, spas, and medical spas.</p>
                    <div className='mt-6 sm:mt-0'>
                        <button className='px-4 sm:px-7 py-2 sm:py-3.5 mr-3 sm:mr-5 bg-primary text-white text-sm sm:text-base rounded-sm '>Get A Quote</button>
                        <button className='px-4 sm:px-7 py-2 sm:py-3.5 bg-teal-500 text-white text-sm sm:text-base rounded-sm '>About Us</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;