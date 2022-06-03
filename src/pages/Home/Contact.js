import React from 'react';

const Contact = () => {
    return (
        <div className='pt-20 pb-8 bg-accent'>
            <h2 className='text-4xl text-center font-bold text-secondary mb-14'>Let us handle your <br />
                project, professionally.</h2>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <form>
                            <div className='sm:flex'>
                                <input type="text" placeholder="First Name" className="input  w-full sm:w-80 mr-7 rounded-sm" />
                                <input type="text" placeholder="Last Name" className="input w-full sm:w-80 rounded-sm mt-6 sm:mt-0" />
                            </div>
                            <div className='sm:flex mt-6'>
                                <input type="text" placeholder="Email Address" className="input  w-full sm:w-80 mr-7 rounded-sm" />
                                <input type="text" placeholder="Phone Number" className="input w-full sm:w-80 rounded-sm mt-6 sm:mt-0" />
                            </div>
                            <textarea className="textarea my-6 w-full h-36" placeholder="Bio"></textarea>
                        </form>
                        <button className="btn btn-primary capitalize text-white font-medium rounded-sm">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;