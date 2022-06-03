import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const MyProfile = () => {

    const [user] = useAuthState(auth);
    const email = user?.email;
    const [userInfo, setUserInfo] = useState({});
    const [userUpdateStatus, setUserUpdateStatus] = useState(0);
    const imageStorageKey = "bbb41293b29baeed6436287ccb9bbf00"
    const [file, setFile] = useState("");
    let userPicture;

    const handleFileSelected = (e) => {
        const files = Array.from(e.target.files)
        setFile(files);
    }

    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${email}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [email, userUpdateStatus])

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        const image = file[0];
        const formData = new FormData();
        formData.append("image", image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`

        await fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if(result.success) {
                    userPicture = result.data.url;
                }
            })
        const name = e.target.name.value;
        const address = e.target.address.value;
        const email = e.target.email.value;
        const profession = e.target.profession.value;
        const description = e.target.description.value;
        const newUser = { name, address, email, profession, description, image: userPicture };

        fetch(`http://localhost:5000/userUpdate?email=${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`${name} Your Profile was updated`)
                    setUserUpdateStatus(userUpdateStatus + 1);
                    e.target.reset();
                } else {
                    toast.error(`${name} Please again fill the form`);
                }
            })
    }


    return (
        <div>
            <h2 className='pt-5 pb-3 text-2xl font-bold border-b-2'>My Profile</h2>
            <form onSubmit={handleUpdateUser} className='flex pt-10 pb-10 px-16'>
                <div className='w-3/12'>
                    <div className="avatar ml-3 mb-10">
                        <div className="w-36 rounded-full">
                            <img src={userInfo?.image} alt='' />
                        </div>
                    </div>
                    <div>
                        <label className='bg-primary py-2 px-8 text-white rounded-3xl' htmlFor="filePicker">
                            Upload Photo
                        </label>
                        <input type="file" onChange={handleFileSelected} id="filePicker" name='file' style={{ visibility: "hidden" }} />
                    </div>
                </div>
                <div className='w-9/12'>
                    <div className='grid grid-cols-1 gap-3'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Full Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={userInfo?.name} placeholder="Full Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label none">
                                <span className="label-text font-medium">Email Address<span className='ml-2 text-gray-400'>(Email Address cannot be change)</span></span>
                            </label>
                            <input type="text" name='email' defaultValue={userInfo?.email} placeholder="Email Address" className="input input-bordered" readOnly disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Profession</span>
                            </label>
                            <input type="text" name='profession' defaultValue={userInfo?.profession} placeholder="Profession" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Permanent Address</span>
                            </label>
                            <input type="text" name='address' defaultValue={userInfo?.address} placeholder="Permanent Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">About Your Self</span>
                            </label>
                            <textarea name='description' defaultValue={userInfo?.description} className="textarea textarea-bordered h-28" placeholder="Description"></textarea>
                        </div>
                        <div className='text-center'>
                            <input className='w-64 py-3 mt-3 text-white bg-primary rounded' type="submit" value="Update Profile" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MyProfile;