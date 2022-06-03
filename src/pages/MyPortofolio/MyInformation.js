import React from 'react';

const MyInformation = () => {
    return (
        <div className='px-40 my-16'>
            <h1 className='text-center text-4xl font-semibold'>My Skills & Details</h1>
            <div className='flex mt-10'>
                <div className='w-5/12'>
                    <h3 className='text-2xl font-bold'>Look What Can I Do ?</h3>
                    <ul className='list-disc pl-5 mt-3'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>BOOTSTRAP</li>
                        <li>TAILWIND</li>
                        <li>REACT JS</li>
                        <li>MONGO DB</li>
                        <li>EXPRESS JS</li>
                        <li>NODE JS</li>
                    </ul>
                </div>
                <div className='w-7/12'>
                    <h2 className='text-2xl font-bold mb-3'>My Project Live Link & Information : </h2>
                    <p><span className='font-bold'>1.</span> <span className='font-medium'>Fruite Store :</span> <a className='underline' href="https://orgafresh-fruites.web.app/home" target="_blank" rel="alt noreferrer">https://orgafresh-fruites.web.app/home</a> </p>
                    <p className='mt-2'><span className='font-bold'>2.</span> <span className='font-medium'>Clock Reveiw Website:</span> <a className='underline' href="https://strong-crisp-c489e7.netlify.app/Home" target="_blank" rel="alt noreferrer">https://strong-crisp-c489e7.netlify.app/Home</a> </p>
                    <p className='mt-2'><span className='font-bold'>3.</span> <span className='font-medium'>Beauty Parlour Website:</span> <a className='underline' href="https://jerin-parlour-55b6a.web.app/" target="_blank" rel="alt noreferrer">https://jerin-parlour-55b6a.web.app/</a> </p>
                   <h3 className='text-lg font-medium mt-4'>Email Address : zubayersalehin@gmail.com</h3>
                   <h3 className='text-lg font-medium mt-1'>Education Qualification :  Kishoregonj Polytechnic Institute,  Bangladesh. (Computer Science And Technology, 5th Semister)</h3>

                </div>
            </div>
        </div>
    );
};

export default MyInformation;