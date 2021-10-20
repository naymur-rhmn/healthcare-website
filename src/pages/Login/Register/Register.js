import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle, signInUsingFb, error, getEmail, getPassword, signInUsingPassword, getName } = useAuth();


    return (
        <div className="login-container p-lg-5 p-md-5 p-0 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-md-8 col-10 mx-auto shadow">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="p-lg-5 p-md-5 p-0">
                                    <h2>Register in to Dental Care.</h2>
                                    <p className="mb-5">Enter your details below.</p>
                                    <form onSubmit={signInUsingPassword}>
                                        <input onBlur={getName} type="text" name="" placeholder="Type your Name" required />
                                        <input onBlur={getEmail} type="email" name="" placeholder="Type your Email" required />
                                        <input onBlur={getPassword} type="password" name="" placeholder="Type your password" required />
                                        <div className="text-danger">{error}</div>
                                        {/* <input onBlur={getPassword} type="password" name="" placeholder="Re-enter your password" required /> */}
                                        <input className="bg-primary text-white fw-bold" type="submit" value="Sign up" />
                                    </form>
                                    <div className="text-center">
                                        <p>Or sign up with</p>
                                        {/* <button onClick={signInUsingFb} className="btn btn-outline-primary fs-5 mb-2 me-1"><i className="fab fa-facebook-square"></i> Facebook</button> */}
                                        <button onClick={signInUsingGoogle} className="btn btn-outline-danger fs-5 mb-2 ms-1 me-1"><i className="fab fa-google-plus-g"></i> Google</button>
                                        <p className="mt-5">Already have an account? <Link to="/login">Login</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block">
                                <img className="img-fluid" src="https://ru.all.biz/img/ru/catalog/2028277.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;