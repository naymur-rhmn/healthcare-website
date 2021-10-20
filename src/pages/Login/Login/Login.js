import React from 'react';
import './Login.css'
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, signInUsingFb, getEmail, getPassword, logInWithEmailPassword, error } = useAuth();

    const location = useLocation();
    console.log(location.state?.from);
    return (
        <div className="login-container p-lg-5 p-md-5 p-0 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-md-8 col-10 mx-auto shadow">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="p-lg-5 p-md-5 p-0">
                                    <h2>Log in to Dental Care.</h2>
                                    <p className="mb-5">Enter your details below.</p>
                                    <form onSubmit={logInWithEmailPassword}>
                                        <input onBlur={getEmail} type="email" name="email" placeholder="Type your Email" required />
                                        <input onBlur={getPassword} type="password" name="password" placeholder="Type your password" required />
                                        <div className="text-danger">{error}</div>
                                        <input className="bg-primary text-white fw-bold" type="submit" value="Login" />
                                    </form>
                                    <div className="text-center">
                                        <p>Or login with</p>
                                        {/* <button onClick={signInUsingFb} className="btn btn-outline-primary fs-5 mb-2 me-1"><i className="fab fa-facebook-square"></i> Facebook</button> */}
                                        <button onClick={signInUsingGoogle} className="btn btn-outline-danger fs-5 mb-2 ms-1 me-1"><i className="fab fa-google-plus-g"></i> Google</button>
                                        <p className="mt-5">Not a member? <Link to="/register">Sign up now</Link></p>
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

export default Login;