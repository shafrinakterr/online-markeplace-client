import { useContext } from "react";
import { Authcontext } from "../coponent/Authprovider/Authprovider";
import { useState } from "react";
import { useEffect } from "react";

const Bidrequests = () => {
    const [jobReques, setJobRequest] = useState([]);
    const { user } = useContext(Authcontext)
    useEffect(() => {
        const fetchMyBids = async () => {
            const res = await fetch(`https://online-marketplace-server-site.vercel.app/reqestJob/${user?.email}`);
            const data = await res.json();
            setJobRequest(data)
        }
        fetchMyBids();
    })
    
    const handleConfirmJob =async (id) => {
        
        const res = await fetch(`https://online-marketplace-server-site.vercel.app/jobStatus/${id}?status=Confirm`);
        const data = await res.json();
    }
    const handleRejectButton =async (id) => {
        
        const res = await fetch(`https://online-marketplace-server-site.vercel.app/jobStatus/${id}?status=Cencel`);
        const data = await res.json();
    }
    console.log(jobReques)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className="font-bold text-primary-color border-primary-color">Job title
                            </th>
                            <th className="font-bold text-primary-color border-primary-color">Email</th>
                            <th className="font-bold text-primary-color border-primary-color">Deadline</th>
                            <th className="font-bold text-primary-color border-primary-color">Salary</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobReques.map(request =>
                                <tr>
                                    <th>1</th>
                                    <td>{request.title}</td>
                                    <td>{request.email}</td>
                                    <td>{request.deadline}</td>
                                    <td>{request.salary}</td>
                                    <td className="text-white flex gap-5 justify-end">

                                        <button onClick={() => handleConfirmJob(request._id)} className="text-white hover:bg-primary-color bg-primary-color btn-sm btn capitalize">Accept</button>
                                        <button onClick={()=>handleRejectButton(request._id)} className="text-white hover:bg-primary-color bg-primary-color btn-sm btn capitalize">Reject</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bidrequests;