import React from 'react';
import image1 from "../../assets/Image/img1.jpg"
import image2 from "../../assets/Image/img2.jpg"


const ParlourDescription = () => {
    return (
        <div className='2xl:max-w-7xl mx-auto mb-24 sm:mb-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-24 sm:gap-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div className='p-8 bg-primary text-white py-12'>
                        <h5 className='text-md'>Hair Salon</h5>
                        <h2 className='text-2xl mt-3 font-semibold mb-5'>Jerin Parlour Hair Salon Creating Beauty</h2>
                        <p className='text-sm'>Hair color is the pigmentation of hair follicles due to two types of melanin eumelanin and pheomelanin. Generally, if more melanin is present, the color of the hair is darker, if less melanin is present, the hair is lighter. The tone of the hair is dependent on the ratio of black or brown eumelanin to yellow or red pheomelanin.</p>
                        <button className='btn capitalize rounded-sm border-0 mt-5 bg-white text-gray-500 hover:bg-gray-300 hover:text-white'>Read More</button>
                    </div>
                    <div>
                        <img className='w-full h-full object-cover' src={image1} alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div className='p-8 bg-primary text-white py-12'>
                        <h5 className='text-md'>Skin Treatment</h5>
                        <h2 className='text-2xl mt-3 font-semibold mb-5'>All Hair Services for Your Pleasure</h2>
                        <p className='text-sm'>Facial is a family of skin care treatments for the face, including steam, physical and chemical, creams, lotions, facial masks, peels, and massage. They are normally performed in beauty salons, but are also a common spa treatment. They are used for general skin health as well as for specific skin conditions.</p>
                        <button className='btn capitalize rounded-sm border-0 mt-5 bg-white text-gray-500 hover:bg-gray-300 hover:text-white'>Read More</button>
                    </div>
                    <div>
                        <img className='w-full h-full object-cover' src={image2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParlourDescription;