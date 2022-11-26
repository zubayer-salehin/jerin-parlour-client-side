import Swal from 'sweetalert2';


const DeleteServiceConfirmModal = ({ serviceModal, setServiceModal, refetch }) => {

    const { name, _id } = serviceModal

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: `${name} Service won't be able to revert this!`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {

            fetch(`https://jerin-parlour-server-side.onrender.com/services/${_id}`, {
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
                            `${name} Service is deleted.`,
                            'success'
                        )
                        setServiceModal(null);
                        refetch();
                    }
                })

        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                `${name} Service is Safe.`,
                'error'
            )
            setServiceModal(null);
        }
    })

};

export default DeleteServiceConfirmModal;