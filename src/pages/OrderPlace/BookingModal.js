import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const today = new Date();

const BookingModal = ({ treatment, setTreatment, refetch }) => {

    const [user] = useAuthState(auth);
    const { _id, price, name, slots } = treatment;
    const navigate = useNavigate();

    const handleBooking = (e) => {
        e.preventDefault();
        const clientName = user?.displayName;
        const clientEmail = user?.email;
        const date = e.target.date.value;
        const slot = e.target.slot.value;
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        const booking = { treatmentId: _id, clientName, clientEmail, treatment: name, date, slot, address, phone, price }

        fetch("https://morning-brushlands-93158.herokuapp.com/booking", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "authorization":`Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`${name} Booking is done at ${slot}`)
                    navigate(`/payToProced/${_id}`); 
                } else {
                    toast.error(`${name} Already have booked at ${data?.booking?.slot}`);
                }
                refetch();
                setTreatment(null)
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center mt-2 mb-3 text-primary text-lg">Booking for : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 justify-items-center'>
                        <input type="text" name='name' value={user?.displayName} className="input input-bordered w-full max-w-xs" readOnly disabled />
                        <input type="text" name="email" value={user?.email} className="input input-bordered w-full max-w-xs" readOnly disabled />
                        <input type="text" name="date" value={today?.toDateString()} className="input input-bordered w-full max-w-xs" readOnly disabled />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {slots.map(time => <option key={Math.random() * 1000} value={time}>{time}</option>)}
                        </select>
                        <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" required />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value="Booking Confirm" className="input bg-primary text-white text-md font-medium w-full max-w-xs mt-2" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;