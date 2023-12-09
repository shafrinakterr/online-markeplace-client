import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../Authprovider/Authprovider";

const Navbar = () => {
    const { user, logOut } = useContext(Authcontext)
    // dark mood
    const dark = () => {
        return document.querySelector("html").attributes['data-theme'].value = "dark"
    }
    const light = () => {
        return document.querySelector("html").attributes['data-theme'].value = "light"
    }


    // dark and light 
    const toggleDarkMode = e => {
        if (e.target.checked) {
            return dark();
        }
        return light();
    }



    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const menuBar = <>
        <div className="ml-5 text-lg font-semibold hover:bg-blue-300 btn-sm rounded-xl">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-primary-color" : ""
                }
            >
                Home
            </NavLink>
        </div>
        <div className="ml-5 text-lg font-semibold hover:bg-blue-300 btn-sm rounded-xl">
            <NavLink to='/addjob'

                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-primary-color" : ""
                }
            >
                Add job
            </NavLink>
        </div>
        <div className="ml-5 text-lg font-semibold hover:bg-blue-300 btn-sm rounded-xl">
            <NavLink to='/mypostedjobs'

                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-primary-color" : ""
                }
            >
                My Posted Jobs
            </NavLink>
        </div>
        <div className="ml-5 text-lg font-semibold hover:bg-blue-300 btn-sm rounded-xl">
            <NavLink to='/myBids'

                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-primary-color" : ""
                }
            >
                My Bids
            </NavLink>
        </div>
        <div className="ml-5 text-lg font-semibold  hover:bg-blue-300 btn-sm rounded-xl ">
            <NavLink to='/bidrequests'

                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-primary-color " : ""
                }
            >
                Bid Requests
            </NavLink>
        </div>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuBar}
                    </ul>
                </div>
                <a className="flex items-center btn-ghost normal-case text-xl">
                    <img className="md:w-16 w-11" src="https://i.ibb.co/vdKFLVf/logoooo.png" alt="" />
                    <h1 className="font-semibold text-sm md:text-lg ">Job Nexa</h1>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuBar}
                </ul>
            </div>
            <div className="navbar-end">

                <div className="items-center gap dropdown navbar-end dropdown-end ms-2 flex ju">

                    <div>
                        {
                            user ? (
                                <div>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-20 rounded-full">
                                            <img className="w-18 h-18" src={user.photoURL} />


                                        </div>
                                    </label>
                                    <div className="">
                                        <ul tabIndex={0} className="menu  menu-sm border-2 border-primary-color   dropdown-content mt-3 z-[1] p-5 space-y-2 shadow bg-base-100 rounded-box w-80 text-center">
                                            <div className="flex justify-end">
                                                <input onChange={toggleDarkMode} type="checkbox" name="" className="toggle border-primary-color bg-primary-color toggle-md" id="" />
                                            </div>
                                            <img className="w-20 h-20 mx-auto rounded-full" src={user?.photoURL} alt="" />

                                            <p className="text-2xl font-bold">{user.displayName}</p>
                                            <p className="text-sm mb-3">{user.email}</p><br />
                                            <div className="block text-start text-lg space-y-3 mt-5 ">
                                                <button onClick={handleLogOut} className="btn w-full hover:bg-primary-color bg-primary-color text-white">Logout</button>
                                            </div>
                                        </ul>
                                    </div>


                                </div>
                            ) : (
                                <li className="mr-5 list-none text-lg font-semibold bg-blue-300 btn-sm rounded-xl">
                                    <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "" : ""
                                        }
                                    >
                                        Login
                                    </NavLink>
                                </li>
                            )
                        }
                    </div>


                </div>
            </div>


        </div>
    );
};

export default Navbar;