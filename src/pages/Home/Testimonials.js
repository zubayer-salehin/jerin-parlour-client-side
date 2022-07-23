import React from 'react';
import { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./Testimonials.css"
import Loading from '../../shared/Loading/Loading';
import { useQuery } from 'react-query';


const Testimonials = () => {

    const { data: reveiws, isLoading } = useQuery(["reveiws"], () => fetch(`https://morning-brushlands-93158.herokuapp.com/reveiws`)
        .then(res => res.json()));

    if (isLoading) {
        return <Loading loadingStatus="true"></Loading>
    }

    return (
        <div className='pb-16 sm:px-20'>
            <h2 className='text-4xl font-bold text-secondary text-center pt-16 sm:pt-20 pb-6 sm:pb-10'>Testimonials</h2>
            <Swiper
                modules={[Pagination, A11y, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={10}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
                pagination={{ clickable: true }}>
                {reveiws.slice(-9).reverse().map((r) => (
                    <SwiperSlide key={r._id}>
                        <div className="card bg-base-100">
                            <div className="card-body text-secondary">
                                <div className='flex mt-6'>
                                    <div className="rounded-full">
                                        <img className='w-16 rounded-full' src={r.image} alt="" />
                                    </div>
                                    <div className='ml-4'>
                                        <h5 className='text-xl font-bold'>{r.name}</h5>
                                        <p className='text-base font-medium'>{r.profession}</p>
                                    </div>
                                </div>
                                <p className='pt-2 text-slate-500'>{r.description.slice(0, 135)}</p>
                                <div>
                                    <p className='inline font-medium'>Ratings : </p>
                                    <div className="rating rating-sm inline">
                                        {[...Array(5)].map((rat, ind) => <input key={ind} type="radio" name="rating-2" className={`mask mask-star-2 mr-1 ${r.rating >= ind + 1 ? "bg-orange-600" : "bg-orange-300"}`} />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className='w-full h-14 none'>
                </div>
            </Swiper>
        </div>
    );
};

export default Testimonials;