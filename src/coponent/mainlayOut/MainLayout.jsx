import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Home from "../../page/Home";
import Footer from "../footer/Footer";

const MainLayout = () => {
    return (
        <div  className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;