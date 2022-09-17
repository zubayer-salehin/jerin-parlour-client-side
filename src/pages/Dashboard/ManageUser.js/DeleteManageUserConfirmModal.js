import Swal from 'sweetalert2';


const DeleteManageUserConfirmModal = ({ userModal, setUserModal, refetch }) => {

    const { name, _id, uid } = userModal

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

            fetch(`https://morning-brushlands-93158.herokuapp.com/user?id=${_id}&&uid=${uid}`, {
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
                            `${name} user is Deleted.`,
                            'success'
                        )
                        setUserModal(null);
                        refetch();
                    }
                })

        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                `${name} user is Safe.`,
                'error'
            )
            setUserModal(null);
        }
    })

};

export default DeleteManageUserConfirmModal;