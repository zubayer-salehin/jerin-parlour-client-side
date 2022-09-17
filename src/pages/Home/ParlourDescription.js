import React from 'react';

const ParlourDescription = () => {
    return (
        <div className='2xl:max-w-7xl mx-auto mb-24 sm:mb-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-24 sm:gap-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div className='p-8 bg-primary text-white'>
                        <h5 className='text-md'>Hair Salon</h5>
                        <h2 className='text-2xl mt-3 font-semibold mb-5'>BeautyZone Hair Salon Creating Beauty</h2>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, voluptate culpa quaerat sint dolore, nobis repudiandae fuga quasi laborum possimus voluptates aperiam vitae molestiae praesentium, quisquam dignissimos modi aliquid saepe atque totam explicabo dolores eos!</p>
                        <button className='btn capitalize rounded-sm border-0 mt-5 bg-white text-gray-500 hover:bg-gray-300 hover:text-white'>Read More</button>
                    </div>
                    <div>
                        <img className='w-full h-full object-cover' src="https://beautyzone.dexignzone.com/xhtml/images/about/img1.jpg" alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div className='p-8 bg-primary text-white pt-16'>
                        <h5 className='text-md'>Hair Salon</h5>
                        <h2 className='text-2xl mt-3 font-semibold mb-5'>All Hair Services for Your Pleasure</h2>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, voluptate culpa quaerat sint dolore, nobis repudiandae fuga quasi laborum possimus voluptates aperiam vitae molestiae praesentium, quisquam dignissimos modi aliquid saepe atque totam explicabo dolores eos!</p>
                        <button className='btn capitalize rounded-sm border-0 mt-5 bg-white text-gray-500 hover:bg-gray-300 hover:text-white'>Read More</button>
                    </div>
                    <div>
                        <img className='w-full h-full object-cover' src="https://beautyzone.dexignzone.com/xhtml/images/about/img2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParlourDescription;