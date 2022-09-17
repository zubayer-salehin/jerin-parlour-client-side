import Swal from 'sweetalert2';


const DeleteBookingListConfirmModal = ({ bookingModal, setBookingModal, refetch }) => {

    const { treatment, _id } = bookingModal

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: `${treatment} Booking won't be able to revert this!`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {

            fetch(`https://morning-brushlands-93158.herokuapp.com/booking/${_id}`, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            `${treatment} Booking is deleted.`,
                            'success'
                        )
                        setBookingModal(null);
                        refetch();
                    }
                })
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                `${treatment} Booking is Safe.`,
                'error'
            )
            setBookingModal(null);
        }
    })

};

export default DeleteBookingListConfirmModal;