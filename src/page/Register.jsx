import { useContext, useState } from "react";
import { Authcontext } from "../coponent/Authprovider/Authprovider";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

// import swal from "sweetalert";
import Swal from "sweetalert2";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [register, setRegister] = useState('');
    const [success, setSuccess] = useState('');

    const { createUser } = useContext(Authcontext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name?.value;
        const email = form.email?.value;
        const accept = form.checkbox.checked;
        const password = form.password?.value;
        const photo = form.photo?.value;
        console.log(name, email, password, photo);
        
        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Password should be at least 6 characters',
                customClass: {
                    container: 'custom-swal-container bg-red-300',
                    title: 'custom-swal-title text-xl text-white',
                    confirmButton: 'hover:border-red-600 btn bg-primary-color text-white hover:bg-red-600',
                },
                background: 'black',
                buttonsStyling: false,
            });
            return;
        }
        
        
        const isPasswordValid = (password) => {
            return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/.test(password);
        };

        if (!isPasswordValid(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Password should contain at least one uppercase letter, one lowercase letter, one digit, and one special character, and be at least 8 characters long.',
                customClass: {
                    container: 'custom-swal-container bg-red-300',
                    title: 'custom-swal-title text-xl text-white',
                    confirmButton: 'hover:border-red-600 btn bg-primary-color text-white hover:bg-red-600',
                },
                background: 'black',
                color:'white',
                buttonsStyling: false,
            });
            return;
        } 
        else if (!accept) {
            Swal.fire({
                icon: 'error',
                title: 'Terms and Conditions',
                text: 'Please accept our terms and conditions to proceed.',
            });
            return;
        }

        createUser(name, email, password, photo)
        .then((result) => {
            console.log(result.user);
            Swal.fire({
                icon: 'success',
                title: 'Account create is successfully',
                customClass: {
                    container: 'custom-swal-container bg-red-300',
                    title: 'custom-swal-title text-xl text-white',
                    confirmButton: 'hover:border-red-600 btn bg-primary-color text-white hover:bg-red-600',
                },
                background: 'black',
                buttonsStyling: false,
            });
            return;
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Allready have an account',
                customClass: {
                    container: 'custom-swal-container bg-red-300',
                    title: 'custom-swal-title text-xl text-white',
                    confirmButton: 'hover:border-red-600 btn bg-primary-color text-white hover:bg-red-600',
                },
                background: 'black',
                buttonsStyling: false,
            });
            return
        })
    };

    return (
        <div className="md:flex flex-col-reverse lg:flex-row items-center w-full">
            <div className="hero min-h-screen w-full">
                <div className="card p-2 w-full max-w-sm shadow-2xl">
                    <h1 className="text-3xl text-center">Create a new account</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter your photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" className="input input-bordered" required />
                            <span className="absolute top-12 right-2 text-2xl" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </span>
                        </div>
                        <div className="form-control mt-6">
                            <div className="flex items-center">
                                <input type="checkbox" name="checkbox" id="terms" className="mr-2" />
                                <label className="text-xs" htmlFor="terms">
                                    Accept Our Terms and Conditions
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-primary-color text-white hover:bg-primary-color">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <img className="md:w-full hidden lg:block md:h-full" src="https://i.ibb.co/n63Vrn9/register-removebg-preview.png" alt="" />
        </div>
    );
};

export default Register;