import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const { user, createUser } = useContext(AuthContext);
    console.log(user, createUser)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photoURL = form.photoURL.value;

        console.log(name, email, password, confirmPassword)
        if (confirmPassword !== password) {
            setError('Both passwords do not match');
            setSuccess('');
            return;
        } else if (password.length < 6) {
            setError('Password must be 6 characters long ');
            setSuccess('');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setError('Password must contain at least one capital letter');
            setSuccess('');
            return;
        } else if (!/[!@#$%^&*]/.test(password)) {
            setError('Password must contain at least one special character');
            setSuccess('');
            return;
        } else {
            setError('');
            setSuccess('Your sign-up is successful');
        }


        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log("Error:", error)
            })

    }
    return (
        <div className="min-h-screen hero ">
            <div className="flex-col min-w-full hero-content ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold text-green-600">Register</h1>
                </div>
                <form onSubmit={handleRegister} className="flex-shrink-0 w-full max-w-sm shadow-2xl card box-shadow-carousel">
                    <p className='text-red-500 mt-2 text-center'>{error} </p>
                    <p className='text-green-500 mt-2 text-center'>{success} </p>
                    <div className="card-body">
                        <div className="form-control my-1">
                            {/* <label className="label">
                                <span className="label-text">Name</span>
                            </label> */}
                            <input type="text" name='name' placeholder="name" className="input input-bordered border-1 border-green-400" required />
                        </div>

                        <div className="form-control my-1">
                            {/* <label className="label">
                                <span className="label-text">Email</span>
                            </label> */}
                            <input type="email" name='email' placeholder="email" className="input input-bordered border-1 border-green-400 " required />
                        </div>


                        <div className="form-control my-1">
                            {/* <label className="label">
                                <span className="label-text">Password</span>
                            </label> */}
                            <input type="password" name='password' placeholder="password" className="input input-bordered border-1 border-green-400" required />
                        </div>
                        <div className="form-control my-1">
                            {/* <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label> */}
                            <input type="password" name='confirmPassword' placeholder="confirm password" className="input input-bordered border-1 border-green-400" required />
                        </div>
                        <div className="form-control my-1">
                            {/* <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label> */}
                            <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered border-1 border-green-400" required />
                        </div>
                        <div className="mt-6 form-control">
                            <button className="details rounded-md py-2 border-2 border-green-500 font-semibold text-white">Register</button>
                        </div>
                        <div className='mx-auto mt-3'><span>Already Have Account? </span><Link to="/login" className='text-blue-500'>Login</Link></div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;

