import { useLoaderData } from "react-router-dom";
import ApplyJobForm from "../coponent/applyjobform/ApplyJobForm";
import { useContext } from "react";
import  { Authcontext } from "../coponent/Authprovider/Authprovider";

const Details = () => {
    const {user}= useContext(Authcontext)
    const jobDetails = useLoaderData();
    
    return (
        <div className="mt-20">
            <div className="card p-5 bg-primary-color shadow-xl">
                <div className=" text-center text-white space-y-5">
                    <h2 className="text-4xl mt-3 font-semibold text-center">{jobDetails.title}</h2>
                   
                    <p className="text-lg w-{60%} mx-auto">Salary {jobDetails.description}</p>
                    <div className="flex justify-center gap-3"> <p>{jobDetails.deadline}</p>
                    <p>Salary {jobDetails.maximum_price}</p></div>
                   
                </div>
            </div>
            <ApplyJobForm jobDetails={jobDetails}></ApplyJobForm>
        </div>
    );
};

export default Details;