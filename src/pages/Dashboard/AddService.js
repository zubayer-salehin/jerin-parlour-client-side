import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddService = () => {

    const imageStorageKey = "bbb41293b29baeed6436287ccb9bbf00"
    const [file, setFile] = useState("");

    const handleFileSelected = (e) => {
        const files = Array.from(e.target.files)
        setFile(files);
    }
    let userImage;

    const handleServiceAdd = async (e) => {
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
                    userImage = result.data.url;
                }
            })

        const checkslot1 = e.target.slot1.checked;
        const slot1 = e.target.slot1.value;
        const checkslot2 = e.target.slot2.checked;
        const slot2 = e.target.slot2.value;
        const checkslot3 = e.target.slot3.checked;
        const slot3 = e.target.slot3.value;
        const checkslot4 = e.target.slot4.checked;
        const slot4 = e.target.slot4.value;
        const checkslot5 = e.target.slot5.checked;
        const slot5 = e.target.slot5.value;
        const checkslot6 = e.target.slot6.checked;
        const slot6 = e.target.slot6.value;
        const slots = [checkslot1 && slot1, checkslot2 && slot2, checkslot3 && slot3, checkslot4 && slot4, checkslot5 && slot5, checkslot6 && slot6];
        const name = e.target.name.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const newService = { name, price, description, image: userImage, slots };
        fetch(`https://morning-brushlands-93158.herokuapp.com/services?name=${name}`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`${name} service was successfully Added`)
                    e.target.reset();
                } else {
                    toast.error(`${name} service already exists`);
                }
            })

    }

    return (
        <div>
            <h2 className='pt-5 pb-3 text-2xl font-bold'>Add Service</h2>
            <div style={{ background: "#f4f7fc", height: "490px" }} className="pt-7">
                <div className='ml-5 mr-10 bg-white p-5 rounded-2xl'>
                    <form onSubmit={handleServiceAdd}>
                        <div className='flex md:flex-none'>
                            <div className='grid grid-cols-1 gap-3 w-1/2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Service Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Service Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label none">
                                        <span className="label-text font-medium">Service Price</span>
                                    </label>
                                    <input type="text" name='price' placeholder="Service Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Service Description</span>
                                    </label>
                                    <textarea name='description' className="textarea textarea-bordered h-24" placeholder="About Tell Us Service" required></textarea>
                                </div>
                            </div>
                            <div className='pl-14'>
                                <div className='mt-3'>
                                    <p className='label-text font-medium mb-4'>Service Image</p>
                                    <label className='bg-pink-100 py-2 px-8 text-primary border font-medium border-primary rounded-md' htmlFor="filePicker">
                                        <FontAwesomeIcon icon={faCloudArrowUp}></FontAwesomeIcon>  Upload Photo
                                    </label>
                                    <input type="file" onChange={handleFileSelected} id="filePicker" name='file' style={{ visibility: "hidden" }} required />
                                </div>
                                <div className="form-control">
                                    <label className="label pt-1">
                                        <span className="label-text font-medium">Select Slots</span>
                                    </label>
                                    <div className="form-control">
                                        <label className="cursor-pointer label justify-start py-1.5 w-44">
                                            <input type="checkbox"
                                                className="checkbox checkbox-primary w-5 h-5 rounded-none" value="10:00AM-12:00AM" name='slot1' />
                                            <span className="label-text ml-3">10:00AM-12:00AM</span>
                                        </label>
                                        <label className="cursor-pointer label justify-start py-1.5 w-44">
                                            <input type="checkbox" className="checkbox checkbox-primary w-5 h-5 rounded-none" value="12:00AM-2:00PM" name='slot2' />
                                            <span className="label-text ml-3">12:00AM-2:00PM</span>
                                        </label>
                                        <label className="cursor-pointer label justify-start py-1.5 w-44">
                                            <input type="checkbox" className="checkbox checkbox-primary w-5 h-5 rounded-none" value="2:00PM-4:00PM" name='slot3' />
                                            <span className="label-text ml-3">2:00PM-4:00PM</span>
                                        </label>
                                        <label className="cursor-pointer label justify-start py-1.5 w-44">
                                            <input type="checkbox" className="checkbox checkbox-primary w-5 h-5 rounded-none" value="4:00PM-6:00PM" name='slot4' />
                                            <span className="label-text ml-3">4:00PM-6:00PM</span>
                                        </label>
                                        <label className="cursor-pointer label justify-start py-1.5 w-44">
                                            <input type="checkbox" className="checkbox checkbox-primary w-5 h-5 rounded-none" value="6:00PM-8:00PM" name='slot5' />
                                            <span className="label-text ml-3">6:00PM-8:00PM</span>
                                        </label>
                                        <label className="cursor-pointer label justify-start py-1.5 w-44">
                                            <input type="checkbox" className="checkbox checkbox-primary w-5 h-5 rounded-none" value="8:00PM-10:00PM" name='slot6' />
                                            <span className="label-text ml-3">8:00PM-10:00PM</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input className='btn btn-primary px-16 mt-5 text-white' type="submit" value="Add Service" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;