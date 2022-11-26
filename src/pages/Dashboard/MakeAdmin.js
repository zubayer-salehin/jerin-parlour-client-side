import React from 'react';
import Swal from 'sweetalert2';

const MakeAdmin = () => {

    const handleMakeAdmin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if (email) {
            fetch(`https://jerin-parlour-server-side.onrender.com/user`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify({ email })
            })
                .then(res => res.json())
                .then(result => {
                    if (result.success) {
                        Swal.fire({
                            icon: 'success',
                            title: "Successfull",
                            text: `${email} are admin jerin Parlour website`,
                            timer: 4000
                        })
                        e.target.reset();
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: "Opps!",
                            text: `Please Enter Valid Email`,
                        })
                    }
                })

        }
    }

    return (
        <div>
            <h2 className='pt-5 pb-3 text-2xl font-bold'>Make Admin</h2>
            <div style={{ backgroundColor: "#f4f7fc" }} className="max-h-fit py-8 pl-5 sm:pl-10 rounded-xl">
                <form onSubmit={handleMakeAdmin}>
                    <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs sm:mr-3 mb-4 sm:mb-0" required />
                    <input className='btn btn-primary text-white' type="submit" value="Make Admin" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;