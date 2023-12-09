import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";
// import { useState } from "react";

const CardJobPost = ({ postData, updateData }) => { 
    const { user } = useContext(Authcontext);
    const { _id, email, title, category, deadline, maximum_price, description } = postData;

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it'
        }).then((result) => {
            if (result.isConfirmed) {
                // User confirmed, proceed with deletion
                fetch(`https://online-marketplace-server-site.vercel.app/jobPost/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // Update the data in the parent component
                        updateData(id);
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                    }
                })
                .catch(error => {
                    console.error('Error deleting job post:', error);
                });
            }
        });
    }

    return (
        <div>
            <div className="mt-10 mb-10 flex justify-center items-center min-h-[450px] bg-base-100 rounded-lg shadow-xl">
                <div className='p-3 space-y-3'>
                    <h2 className="card-title rounded-lg">{category}</h2>
                    <h2 className="card-title rounded-lg">{title}</h2>
                    <p className='text-lg font-semibold flex justify-between'>Dealine: {deadline}</p>
                    <p className='font-bold'>Salary: {maximum_price}</p>
                    <p className='text-sm'>{description}</p>
                    <div>
                        <Link to={`/details/${_id}`}>
                            <button className='text-primary-color capitalize font-bold'>Job Details....</button>
                        </Link>
                    </div>
                    <div className="flex gap-4">
                        <Link to={`/updated/${_id}`}
                            className={`btn capitalize btn-outline border-primary-color hover:bg-primary-color hover:border-0 shadow-inner btn-sm font-bold ${user?.email === email
                                ? 'text-primary-color '
                                : 'bg-primary-color text-white hover:text-primary-color'
                                }`}
                            disabled={user?.email !== email}>
                            <button>
                                Update
                            </button>
                        </Link>
                        <button onClick={() => handleDelete(_id)}
                            className={`btn capitalize btn-outline border-primary-color hover:bg-primary-color hover-border-0 shadow-inner btn-sm font-bold ${user?.email === email
                                ? 'text-primary-color '
                                : 'bg-primary-color text-white hover:text-primary-color'
                                }`}
                            disabled={user?.email !== email}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardJobPost;
