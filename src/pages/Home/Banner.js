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
                    <h2 className='text-center sm:text-left text-3xl sm:text-5xl font-bold text-primary bannerTitleStyle smallDeviceTitle'>BeautyZone Hair Salon <br /> Creating Beauty</h2>
                    <p className='pt-6 pb-6 hidden sm:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, velit <br /> suscipit, a doloribus repellat, cum possimus saepe eaque quidem <br /> quasi ad eligendi dolorem. Voluptatibus, nobis.</p>
                    <div className='text-center sm:text-left'>
                        <button className='mt-14 sm:mt-0 px-7 py-3.5 mr-5 bg-primary text-white rounded-sm smallDeviceButton'>Get A Quote</button>
                        <button className='px-7 py-3.5 bg-teal-500 text-white rounded-sm smallDeviceButton'>About Us</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <img className='bannerImage' src={slider2} alt="" />
                <div className='absolute bannerImagePositionSet'>
                    <h2 className='text-center sm:text-left text-3xl sm:text-5xl font-bold text-primary bannerTitleStyle smallDeviceTitle'>BeautyZone Hair Salon <br /> Creating Beauty</h2>
                    <p className='pt-6 pb-6 hidden sm:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, velit <br /> suscipit, a doloribus repellat, cum possimus saepe eaque quidem <br /> quasi ad eligendi dolorem. Voluptatibus, nobis.</p>
                    <div className='text-center sm:text-left'>
                        <button className='mt-14 sm:mt-0 px-7 py-3.5 mr-5 bg-primary text-white rounded-sm smallDeviceButton'>Get A Quote</button>
                        <button className='px-7 py-3.5 bg-teal-500 text-white rounded-sm smallDeviceButton'>About Us</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;