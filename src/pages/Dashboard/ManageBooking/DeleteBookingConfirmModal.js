import Swal from 'sweetalert2';


const DeleteBookingConfirmModal = ({ manageBookingModal, setManageBookingModal, refetch }) => {

    const { treatment, _id } = manageBookingModal

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

            fetch(`https://jerin-parlour-server-side.onrender.com/manageBooking/${_id}`, {
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
                        setManageBookingModal(null);
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
            setManageBookingModal(null);
        }
    })
};


export default DeleteBookingConfirmModal;