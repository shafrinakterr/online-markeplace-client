
import { useContext } from "react";

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Authcontext } from "../coponent/Authprovider/Authprovider";
import Swal from "sweetalert2";

const AddJob = () => {
    const { user } = useContext(Authcontext)
    console.log(user)
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleJobPost = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const title = form.title.value;
        const category = form.category.value;
        const deadline = form.deadline.value;
        const maxprice = form.maxprice.value;
        const minprice = form.minprice.value;
        const description = form.description.value;

        const JobPostData = { email, title, category, deadline, maxprice, minprice, description }

        fetch('https://online-marketplace-server-site.vercel.app/jobPost', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(JobPostData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-center',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'success',
                        title: 'Job pos successfully'
                    })
                }

            })
            form.reset()
    }

    return (
        <div className="mt-10  rounded-xl bg-primary-color ">
            <div className="lg:hero w-full lg:p-28 rounded-xl mx-auto  bg-primary-color">
                <div className=" lg:hero">
                    <div className=" w-full shadow-2xl bg-base-100 lg:p-5 rounded-xl bg-gradient-to-r from-[#0169CA] to-[#BFDBFE]">
                        <h1 className="text-primary-color text-center  text-5xl font-semibold">Add Job</h1>
                        <form onSubmit={handleJobPost} className="card-body">
                            <div className="flex items-center gap-2">
                                <div className="w-1/2 form-control">
                                    <label className="label">
                                        <span className="label-text text-white font-bold">Email</span>
                                    </label>
                                    <input readOnly defaultValue={user?.email} type="email" name="email" placeholder="email" className="input border-white text-white bg-[#0169ca00] input-bordered" required />
                                </div>
                                <div className="w-1/2 form-control">
                                    <label className="label">
                                        <span className="label-text font-bold  text-white">Job title
                                        </span>
                                    </label>
                                    <input type="text" name="title" placeholder="Enter job title" className="input border-white text-white bg-[#0169ca00] input-bordered" required />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1/2 form-control">
                                    <label className="label">
                                        <span className="label-text font-bold  text-white">Category
                                        </span>
                                    </label>
                                    <select name="category" className="select  text-white border-white bg-[#0169ca00]  w-full ">
                                        <option className="   hover:text-white text-primary-color font-bold" disabled selected>Select your category</option>
                                        <option className=" bg-[#0169ca00] hover:text-white text-primary-color font-bold hover:bg-primary-color">Graphics Design</option>
                                        <option className=" bg-[#0169ca00] hover:text-white text-primary-color font-bold hover:bg-primary-color">Digital Marketing</option>
                                        <option className=" bg-[#0169ca00] hover:text-white text-primary-color font-bold hover:bg-primary-color">Web Development</option>
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
                                        <span className="label-text font-bold  text-white">Maximum price
                                        </span>
                                    </label>
                                    <input type="text" name="maxprice" placeholder="Enter maximum price" className="input border-white text-white bg-[#0169ca00] input-bordered" required />
                                </div>
                                <div className="w-1/2 form-control">
                                    <label className="label">
                                        <span className="label-text font-bold  text-white">Minimum price
                                        </span>
                                    </label>
                                    <input type="text" name="minprice" placeholder="Enter minimum price" className="input border-white text-white bg-[#0169ca00] input-bordered" required />
                                </div>
                            </div>
                            <textarea name="description" className="textarea bg-[#0169ca00] border-white text-white " placeholder="Job Description"></textarea>
                            <div className="form-control mt-6">
                                <button className="btn shadow-inner bg-white rounded-full border-primary-color border-2 text-primary-color capitalize text-lg">Add job</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddJob;