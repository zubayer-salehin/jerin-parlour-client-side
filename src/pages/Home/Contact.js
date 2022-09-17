import React from 'react';
import "./Testimonials.css"

const Contact = () => {
    return (
        <div id='contact' className='py-20'>
            <h2 className='text-4xl text-center font-bold text-secondary mb-14'>Let us handle your <br />
                project, professionally.</h2>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <form>
                            <div className='sm:flex'>
                                <input type="text" placeholder="First Name" className="input  w-full sm:w-80 mr-7 rounded-sm contactInput" />
                                <input type="text" placeholder="Last Name" className="input w-full sm:w-80 rounded-sm mt-6 sm:mt-0 contactInput" />
                            </div>
                            <div className='sm:flex mt-6'>
                                <input type="text" placeholder="Email Address" className="input  w-full sm:w-80 mr-7 rounded-sm contactInput" />
                                <input type="text" placeholder="Phone Number" className="input w-full sm:w-80 rounded-sm mt-6 sm:mt-0 contactInput" />
                            </div>
                            <textarea className="textarea my-6 w-full h-36 contactInput" placeholder="Bio"></textarea>
                        </form>
                        <button className="btn btn-primary capitalize text-white font-medium rounded-sm">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;