import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-full relative flex justify-center items-center h-screen">
            <div className="w-full object-cover">
                <img className="w-full  h-full" src="https://i.ibb.co/Bn6sfF6/errrrorr.png" alt="" />
                <div className="absolute text-center mt-5 bottom-[120px] lg:bottom-[110px] lg:left-[440px] left-110px]">
                    <h1 className="text-4xl font-bold text-primary-color mt-5">Page Not Found</h1>
                    <p className="text-xl mt-1">The requested webpage could not be located on the server</p>                   
                     <Link to='/'>
                        <button className="btn rounded-full text-white capitalize bg-primary-color mt-2">go to home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;