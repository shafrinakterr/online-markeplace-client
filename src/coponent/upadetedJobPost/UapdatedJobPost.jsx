import { useContext } from "react";
import { Authcontext } from "../Authprovider/Authprovider";
import DatePicker from 'react-datepicker';
import { useState } from "react";
import Swal from 'sweetalert2'; // Import SweetAlert
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker CSS
import { useLoaderData } from "react-router-dom";

const UapdatedJobPost = () => {
    const jobPostData = useLoaderData();
    const { _id, title, category, maxprice, minprice, description } = jobPostData;
    const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize selectedDate with the current date

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    
    const { user } = useContext(Authcontext);

    const handleUpdatedJobPost = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const newTitle = form.title.value;
        const newCategory = form.category.value;
        const newMaxPrice = form.maxprice.value;
        const newMinPrice = form.minprice.value;
        const newDescription = form.description.value;
        const newDeadline = selectedDate.toISOString(); // Convert date to ISO format

        const updatedJobPostData = {
            email,
            title: newTitle,
            category: newCategory,
            maxprice: newMaxPrice,
            minprice: newMinPrice,
            description: newDescription,
            deadline: newDeadline,
        };

        fetch(`https://online-marketplace-server-site.vercel.app/jobPost/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedJobPostData),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
                Swal.fire({
                    icon: 'success',
                    title: 'Update Successful',
                    text: 'Your job post has been updated.',
                    customClass: {
                        container: 'bg-red-300', // Use the background color class here
                        text: 'text-white text-xs',
                        title: 'text-2xl text-white',
                        confirmButton: 'hover:border-red-600 btn bg-primary-color text-white hover:bg-red-600',
                    },
                    background: 'black', // Change the background color here
                    buttonsStyling: false,
                });
            }
        });
    };

    return (
        <div className="mt-10  rounded-xl bg-primary-color">
            <div className="lg:hero w-full lg:p-28 rounded-xl mx-auto  bg-primary-color">
                <div className="lg:hero">
                    <div className="w-full shadow-2xl bg-base-100 lg:p-5 rounded-xl bg-gradient-to-r from-[#0169CA] to-[#BFDBFE]">
                        <h1 className="text-primary-color text-center  text-5xl font-semibold">Edit Job Post</h1>
                        <form onSubmit={handleUpdatedJobPost} className="card-body">
                            <div className="flex items-center gap-2">
                                <div className="w-1/2 form-control">
                                    <label className="label">
                                        <span className="label-text text-white font-bold">Email</span>
                                    </label>
                                    <input defaultValue={user?.email} type="email" name="email" placeholder="Email" className="input border-white text-white bg-[#0169ca00] input-bordered" required />
                                </div>
                                <div className="w-1/2 form-control">
                                    <label className="label">
                                        <span className="label-text font-bold  text-white">Job title</span>
                                    </label>
                                    <input type="text" defaultValue={title} name="title" placeholder="Enter job title" className="input border-white text-white bg-[#0169ca00] input-bordered" required />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1/2 form-control">
                                    <label className="label">
                                        <span className="label-text font-bold  text-white">Category</span>
                                    </label>
                                    <select defaultValue={category} name="category" className="select text-white border-white bg-[#0169ca00] w-full">
                                        <option className="hover:text-white text-primary-color font-bold" disabled>Select your category</option>
                                        <option className="hover:text-white text-primary-color font-bold">Graphics Design</option>
                                        <option className="hover:text-white text-primary-color font-bold">Digital Marketing</option>
                                        <option className="hover:text-white text-primary-color font-bold">Web Development</option>
                                    </select>
                                </div>
                                <div className="w-1/2 form-control">
                                    <label className="label">
                                        <span className="label-text font-bold text-white">Deadline</span>
                                    </label>
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        showTimeSelect
                                        dateFormat="yyyy-MM-dd HH:mm"
                                        name="deadline"
                                        placeholderText="Enter deadline"
                                        className="input w-full border-white text-white bg-[#0169ca00] input-bordered"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1/2 form-control">
                                    <label className="label">
                                        <span className="label-text font-bold  text-white">Maximum price</span>
                                    </label>
                                    <input defaultValue={maxprice} type="text" name="maxprice" placeholder="Enter maximum price" className="input border-white text-white bg-[#0169ca00] input-bordered" required />
                                </div>
                                <div className="w-1/2 form-control">
                                    <label className="label">
                                        <span className="label-text font-bold  text-white">Minimum price</span>
                                    </label>
                                    <input defaultValue={minprice} type="text" name="minprice" placeholder="Enter minimum price" className="input border-white text-white bg-[#0169ca00] input-bordered" required />
                                </div>
                            </div>
                            <textarea defaultValue={description} name="description" className="textarea bg-[#0169ca00] border-white text-white " placeholder="Job Description"></textarea>
                            <div className="form-control mt-6">
                                <button className="btn shadow-inner bg-white rounded-full border-primary-color border-2 text-primary-color capitalize text-lg">Update Job Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UapdatedJobPost;
