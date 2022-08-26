import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddReveiw = () => {

    const imageStorageKey = "bbb41293b29baeed6436287ccb9bbf00";
    const [file, setFile] = useState("");

    const handleFileSelected = (e) => {
        const files = Array.from(e.target.files)
        setFile(files);
    }
    let userImage;

    const handleAddReview = async (e) => {
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
                if (result.success) {
                    userImage = result.data.url
                }
            })
        const name = e.target.name.value;
        const profession = e.target.profession.value;
        const description = e.target.description.value;
        const rating = e.target.rating.value;
        const newUser = { name, profession, description, image:userImage, rating };

        fetch(`https://morning-brushlands-93158.herokuapp.com/reveiws?name=${name}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`${name} Reveiw successfully Added`)
                    e.target.reset();
                } else {
                    toast.error(`Reveiw is already given.please try an other one`);
                }
            })
    }


    return (
        <div>
            <h2 className='pt-5 pb-3 text-2xl font-bold'>Add Reveiw</h2>
            <div style={{ background: "#f4f7fc" }} className="max-h-fit py-7">
                <div className='ml-5 mr-10 bg-white p-5 rounded-2xl'>
                    <form onSubmit={handleAddReview}>
                        <div className='sm:flex md:flex-none'>
                            <div className='grid grid-cols-1 gap-3 sm:w-1/2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Full Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Full Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label none">
                                        <span className="label-text font-medium">Profession</span>
                                    </label>
                                    <input type="text" name='profession' placeholder="Profession" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">About Your Self</span>
                                    </label>
                                    <textarea name='description' className="textarea textarea-bordered h-24" placeholder="Description" required></textarea>
                                </div>
                            </div>
                            <div className='sm:pl-14'>
                                <div className='mt-5'>
                                    <p className='label-text font-medium mb-4'>Image</p>
                                    <label className='bg-pink-100 py-2 px-8 text-primary border font-medium border-primary rounded-md' htmlFor="filePicker">
                                        <FontAwesomeIcon icon={faCloudArrowUp}></FontAwesomeIcon>  Upload Photo
                                    </label>
                                    <input type="file" onChange={handleFileSelected} id="filePicker" name='file' style={{ visibility: "hidden" }} required />
                                </div>
                                <div className="form-control">
                                    <label className="label pt-1">
                                        <span className="label-text font-medium">Ratings</span>
                                    </label>
                                    <input type="number" max="5" min="1" name='rating' placeholder="Enter number 1 out of 5" className="input input-bordered sm:w-64" required />
                                </div>
                            </div>
                        </div>
                        <input className='btn btn-primary w-full sm:w-60 mt-7 sm:mt-5 text-white' type="submit" value="Add Reveiw" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReveiw;