import { useContext } from "react";

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Authcontext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";

const ApplyJobForm = ({ jobDetails }) => {
    const { email, title } = jobDetails;
    const { user } = useContext(Authcontext);
    console.log(user)
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleApplyJob = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const buyerEmail = form.buyerEmail.value;
        const salary = form.salary.value;
        const deadline = form.deadline.value;
        const jobStatus = 'pending'
        const userJobApplyData = { title, jobStatus, email, buyerEmail, salary, deadline }
        console.log(userJobApplyData)
        fetch('https://online-marketplace-server-site.vercel.app/user', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userJobApplyData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Apply Successfuly',
                        customClass: {
                            container: 'custom-swal-container bg-red-300',
                            text: 'white text-xs',
                            confirmButton: 'hover:border-blue-600 btn bg-primary-color text-white hover:bg-blue-600',
                        },
                        color: 'white',

                        background: 'black',
                        buttonsStyling: false,
                    });
                    form.reset('')
                }
            })

    }
    return (
        <div className="w-full">
            <div className="mt-10 rounded-xl">
                <div className="lg:hero w-full rounded-xl mx-auto ">
                    <div className=" lg:hero">
                        <div className=" w-full shadow-2xl bg-base-100 lg:p-5 rounded-xl bg-gradient-to-r from-[#0169CA] to-[#BFDBFE]">
                            <h1 className="text-primary-color text-center  text-5xl font-semibold">Appy job</h1>
                            <form onSubmit={handleApplyJob} className="card-body">
                                <div className="flex items-center gap-2">
                                    <div className="w-1/2 form-control">
                                        <label className="label">
                                            <span className="label-text text-white font-bold">Buyer Email</span>
                                        </label>
                                        <input readOnly defaultValue={email} type="email" name="buyerEmail" placeholder="email" className="input border-white text-white bg-[#0169ca00] input-bordered" required />
                                    </div>
                                    <div className="w-1/2 form-control">
                                        <label className="label">
                                            <span className="label-text text-white font-bold">Email</span>
                                        </label>
                                        <input readOnly defaultValue={user?.email} type="email" name="email" placeholder="email" className="input border-white text-white bg-[#0169ca00] input-bordered" required />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">

                                    <div className="w-1/2 form-control">
                                        <label className="label">
                                            <span className="label-text text-white font-bold">Salary</span>
                                        </label>
                                        <input type="text" name="salary" placeholder="Enter salary" className="input border-white text-white bg-[#0169ca00] input-bordered" required />
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
                                <div className="form-control mt-6">
                                    <button
                                        className={`btn w-full capitalize font-bold ${user?.email === jobDetails.email
                                            ? 'bg-gray-300 cursor-not-allowed opacity-75'
                                            : 'bg-primary-color text-white hover:text-primary-color'
                                            }`}
                                        disabled={user?.email === jobDetails.email}
                                    >
                                        Bid now Button
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyJobForm;