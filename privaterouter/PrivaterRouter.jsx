import { useContext } from "react";
import { Authcontext } from "../src/coponent/Authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const PrivaterRouter = ({children}) => {
    const {user, loading}= useContext(Authcontext)
    const location = useLocation()
    console.log(location.pathname);

    if(loading){
       return <span className="loading loading-spinner loading-md"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname}  to='/login'></Navigate>
};

export default PrivaterRouter;