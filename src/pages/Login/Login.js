import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import google from "../../assets/Icon/Group 573.png"
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from '../../shared/Loading/Loading';
import "../ServiceBooking/ServiceBooking.css"

const Login = () => {

    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let errorElement;
    const [token] = useToken(user || guser);

    const [email, setEmail] = useState();

    useEffect(() => {
        if (token) {
            navigate("/home");
        }
    }, [token, navigate])

    if (loading || gloading) {
        return <Loading loadingStatus="true"></Loading>
    }

    if (error || gerror) {
        errorElement = <p className='text-red-500 w-80 mt-3'>{error?.message || gerror?.message}</p>
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    const handleResetPassword = async() => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success("Email Sent");
        }else{
            toast.warning("Please Enter Your Email");
        }
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse sm:w-8/12 sm:mt-8">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">You have already an user then please enter your email and password and hit login button you logged in this website.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="email" className="input input-bordered formInputDegine formInputFontSize" />
                            </div>
                            <div className="form-control mt-2">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered formInputDegine formInputFontSize" />
                                <label className="label">
                                    <p onClick={handleResetPassword} href="#" className="label-text-alt link link-hover text-blue-500 mt-1">Forgot password?</p>
                                </label>
                            </div>
                            {errorElement}
                            <div className="form-control mt-4">
                                <input className='btn btn-primary text-white capitalize' type="submit" value="Login" />
                            </div>
                            <p className='label-text-alt mt-3 text-center'>New to Jerin's Parlour? <Link to="/singUp" className='link link-hover text-blue-500'>Create an Account</Link></p>
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

export default Login;