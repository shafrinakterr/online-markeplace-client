import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Authcontext } from "../coponent/Authprovider/Authprovider";

const myBids = () => {
    const { user } = useContext(Authcontext);
    const [myBids, setMyBids] = useState([]);

    useEffect(() => {
        const fetchMyBids = async () => {
            const res = await fetch(`https://online-marketplace-server-site.vercel.app/my-bids/${user?.email}`);
            const data = await res.json();
            setMyBids(data)
        }
        fetchMyBids();
    })
    console.log(myBids);

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
                            myBids.map(bids =>
                                <tr>
                                    <th>1</th>
                                    <td>{bids.title}</td>
                                    <td>{bids.email}</td>
                                    <td>{bids.deadline}</td>
                                    <td>{bids.salary}</td>
                                    <td className="text-white flex justify-end">
                                        {
                                            bids.jobStatus == "pending" ? <button className="text-white hover:bg-primary-color bg-primary-color btn-sm btn capitalize">Pending</button> : bids.jobStatus == 'Confirm' ? <button className="text-white hover:bg-primary-color bg-green-600 btn-sm btn capitalize">Confirm</button> : <button className="text-white hover:bg-primary-color bg-red-600 btn-sm btn capitalize">
                                                Cencel
                                            </button>

                                        }

                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default myBids;