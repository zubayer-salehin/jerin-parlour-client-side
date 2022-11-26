import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from "../../assets/Icon/Group 573.png"
import auth from "../../firebase.init"
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../shared/Loading/Loading';
import useToken from '../../Hooks/useToken';
import { useState } from 'react';


const SingUp = () => {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [token] = useToken(user || guser);
    let errorElement;

    useEffect(() => {
        if (token) {
            navigate("/home");
            if (userName) {
                fetch(`https://jerin-parlour-server-side.onrender.com/userUpdate?email=${userEmail}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                    },
                    body: JSON.stringify({ name: userName })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {

                        }
                    })
            }
        }
    }, [token, navigate, userName, userEmail])

    if (loading || gloading) {
        return <Loading loadingStatus="true"></Loading>
    }

    if (error || gerror) {
        errorElement = <p className='text-red-500 w-80 mt-3'>{error?.message || gerror?.message}</p>
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        setUserName(name);
        const email = e.target.email.value;
        setUserEmail(email);
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse sm:w-8/12 sm:mt-1">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    <p className="py-6">You have new user then please enter your full name, valid email and password minimum 6 character and hit or click Register button you Registered in this website.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered formInputDegine formInputFontSize" required />
                            </div>
                            <div className="form-control mt-2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered formInputDegine formInputFontSize" required />
                            </div>
                            <div className="form-control mt-2">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered formInputDegine formInputFontSize" required />
                            </div>
                            {errorElement}
                            <div className="form-control mt-6">
                                <input className='btn btn-primary text-white capitalize' type="submit" value="Register" />
                            </div>
                            <p className='label-text-alt mt-3 text-center'>Already have an account? <Link to="/login" className='link link-hover text-blue-500'>Please Login</Link></p>
                        </form>
                        <div className="divider my-2">OR</div>
                        <div className="form-control">
                            <button onClick={() => signInWithGoogle()} className="border border-gray-500 py-2 font-medium rounded"> <img className='w-6 mr-1 inline' src={google} alt="" /> Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;