import React from 'react';
import { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./Testimonials.css"
import Loading from '../../shared/Loading/Loading';
import { useQuery } from 'react-query';
import line from "../../assets/Line/line.png"
import line1 from "../../assets/Line/line1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa } from '@fortawesome/free-solid-svg-icons';


const Testimonials = () => {

    const { data: reveiws, isLoading } = useQuery(["reveiws"], () => fetch(`https://morning-brushlands-93158.herokuapp.com/reveiws`)
        .then(res => res.json()));

    if (isLoading) {
        return <Loading loadingStatus="true"></Loading>
    }

    return (
        <div className="bg-[url('/src/assets/Background-Image/bg4.jpg')] bg-cover bg-bottom">
            <div className='customContainer py-20'>
                <h2 className='text-3xl sm:text-4xl font-bold text-secondary text-center pb-3'>Testimonials Of <span className='text-primary'>Our Clients</span></h2>
                <div className='flex items-center justify-center mb-12'>
                    <img className='w-20 h-4 mr-2' src={line} alt="" />
                    <FontAwesomeIcon className='text-3xl text-primary' icon={faSpa}></FontAwesomeIcon>
                    <img className='w-20 h-4 ml-2' src={line1} alt="" />
                </div>
                <Swiper
                    modules={[Pagination, A11y, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    pagination={{ clickable: true }}>
                    {reveiws.slice(-9).reverse().map((r) => (
                        <SwiperSlide className='border-b-4 border-primary testimonial-shadow' key={r._id}>
                            <div className="card bg-base-100 rounded-none">
                                <div className="card-body text-secondary p-4">
                                    <div className='flex mt-5'>
                                        <div className="rounded-full">
                                            <img className='w-16 rounded-full' src={r.image} alt="" />
                                        </div>
                                        <div className='ml-4'>
                                            <h5 className='text-xl font-bold'>{r.name}</h5>
                                            <p className='text-base font-medium'>{r.profession}</p>
                                        </div>
                                    </div>
                                    <p className='pt-2 text-slate-500'>{r.description.slice(0, 130)+"..."}</p>
                                    <div className='pb-4'>
                                        <p className='inline font-medium'>Ratings : </p>
                                        <div className="rating rating-sm inline">
                                            {[...Array(5)].map((rat, ind) => <input key={ind} type="radio" name="rating-2" className={`mask mask-star-2 mr-1 ${r.rating >= ind + 1 ? "bg-orange-600" : "bg-orange-300"}`} />)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className='w-full h-20 none'>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;