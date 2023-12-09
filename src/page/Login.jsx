import { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../coponent/Authprovider/Authprovider';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import Swal from 'sweetalert2';
const Login = () => {
    const { singInUser, google } = useContext(Authcontext)
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    // location
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location)

    const handleSingIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        singInUser(email, password)
            .then((result) => {

                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'You are now logged in.',
                    customClass: {
                        container: 'custom-swal-container bg-red-300',
                        text: 'white text-xs',
                        title: 'custom-swal-title text-2xl text-white ',
                        confirmButton: 'hover:border-red-600 btn bg-primary-color text-white hover:bg-red-600',
                    },
                    color: 'white',

                    background: 'black',
                    buttonsStyling: false,
                });
                // navigate after login
                navigate(location?.state ? location.state : '/' )

            })
            .catch((error) => {

                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: "Don't have an account",
                    text: 'Please create a new account ',
                    customClass: {
                        container: 'custom-swal-container bg-red-300',
                        title: 'custom-swal-title text-xl text-white',
                        confirmButton: 'hover:border-red-600 btn bg-primary-color text-white hover:bg-red-600',
                    },
                    background: 'black',
                    color: 'white',
                    buttonsStyling: false,
                });
            });

        form.reset('')
    }
    const handleSingInGoogle = () => {
        google()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/' )
            })
            .catch(error => console.log(error))
    }
    return (

        <div className="flex bg-primary-color rounded login mt-10 justify-center items-center mb-5">
            <div className='w-full'>
                <form onSubmit={handleSingIn} className='w-full flex justify-between'>
                    <div className="w-full space-y-2 p-10">
                        <h1 className="text-white text-5xl font-semibold">Welcome Back!</h1>
                        <p className="text-white text-lg mt-2">The faster you fill up the faster you enjoy</p>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input text-white w-full bg-[#f8717100]  border-white " required />
                        </div>
                        <div className="form-control relative">
                            <label className="label text-white">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" className=" input text-white w-full bg-[#f8717100]  border-white" required />
                            <span className="absolute text-white top-12 right-2 text-2xl" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center mb-3">
                                <input
                                    type="checkbox"
                                    className="bg-[#f8717100] w-4 "
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                <p className="text-white text-sm">Remember me</p>
                            </div>


                        </div>
                        <button className='btn w-full bg-white  text-primary-color text-lg border border-white capitalize'>Login</button>



                    </div>

                </form>
                <div className="text-center w-[70%] mx-auto">
                    <p className="text-center mt-5 text-white">Or log in With <hr className=" mx-auto" /></p>
                    <button onClick={handleSingInGoogle} className='btn mb-5 text-lg w-full capitalize text-primary-color rounded-full-full mt-5'><FcGoogle className='flex text-2xl rounded-full'></FcGoogle>Sing in Google</button>
                </div>

                <p className='text-white text-center mb-5 mt-3'>Don't hanve an account?  <Link to='/singUp' className='text-lg font-blod underline'>Sing Up</Link></p>
            </div>
            <img className="h-full hidden md:block w-full object-cover  rounded-l-full" src="https://img.freepik.com/premium-photo/handsome-man-holding-reading-book_1368-42724.jpg" alt="" />

        </div>

    );
};

export default Login;