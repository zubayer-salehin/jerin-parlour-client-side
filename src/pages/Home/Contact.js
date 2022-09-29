import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import "./Testimonials.css"

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_mfphkzw", "template_8chdqf2", form.current, "vsp-kqMwxVdLhqDZT")
            .then((result) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `Email Send`,
                    showConfirmButton: true,
                })
                e.target.reset();
            }, (error) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: `something went wrong!`,
                    showConfirmButton: true,
                })
            });
    };


    return (
        <div id='contact' className='py-20'>
            <div className="customContainer">
                <h2 className='text-3xl sm:text-4xl text-center font-bold text-secondary mb-14'>Let us handle your <br />
                    project, professionally.</h2>
                <div className="hero">
                    <div className="hero-content text-center">
                        <div className="max-w-2xl">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className='sm:flex'>
                                    <input type="text" name="user_name" placeholder="Full Name" className="input  w-full sm:w-80 mr-7 rounded-sm contactInput" required />
                                    <input type="email" name="user_email" placeholder="Email Address" className="input w-full sm:w-80 rounded-sm mt-6 sm:mt-0 contactInput" required />
                                </div>
                                <div className='sm:flex mt-6'>
                                    <input type="text" name="address" placeholder="Address" className="input  w-full sm:w-80 mr-7 rounded-sm contactInput" required />
                                    <input type="text" name='phone' placeholder="Phone Number" className="input w-full sm:w-80 rounded-sm mt-6 sm:mt-0 contactInput" required />
                                </div>
                                <textarea name="message" className="textarea my-6 w-full h-36 contactInput" placeholder="Bio" required></textarea>
                                <input type="submit" className="btn btn-primary capitalize text-white font-medium rounded-sm" value="Send Message" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;