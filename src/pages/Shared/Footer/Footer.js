import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faPhone, faFax } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const envelope = <FontAwesomeIcon icon={faEnvelope} />
const phone = <FontAwesomeIcon icon={faPhone} />
const fax = <FontAwesomeIcon icon={faFax} />

const Footer = () => {
    return (
        <div className="footer text-white">

            <div className="footer-top py-3">
                <div className="container">
                    <div className="row py-5 d-lg-flex d-md-flex d-block align-items-center">
                        <div className="col-lg-8 mb-lg-0 col-md-12  text-center text-lg-start text-md-center mb-md-4 mb-sm-4">
                            <h2 className="m-0">Together we will cure teeth</h2>
                        </div>
                        <div className="col-lg-4 col-12 text-center text-lg-end text-md-center">
                            <button className="gradient-btn">Book an appoinment</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-middle">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-3 col-md-6">
                            <h5>OPEN HOURS</h5>
                            <div className="opening card text-dark p-3 mt-4">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <h6 className="m-0">Monday</h6>
                                            <small>08:00 am - 05:00 pm</small>
                                        </div>
                                        <div className="mb-3">
                                            <h6 className="m-0">Monday</h6>
                                            <small>08:00 am - 05:00 pm</small>
                                        </div>
                                        <div className="mb-3">
                                            <h6 className="m-0">Friday</h6>
                                            <small>08:00 am - 05:00 pm</small>
                                        </div>
                                    </div>
                                    <div className="col-6">

                                        <div className="mb-3">
                                            <h6 className="m-0">Friday</h6>
                                            <small>08:00 am - 05:00 pm</small>
                                        </div>
                                        <div className="mb-3">
                                            <h6 className="m-0">Friday</h6>
                                            <small>08:00 am - 05:00 pm</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        </div>
                        <div className="col-lg-3 text-white">
                            <h5>CONTACTS</h5>
                            <div className="contacts mt-3">
                                <div className="row">
                                    <div className="col">
                                        <p><span className="me-2">{envelope} </span> E-mail: info@example.com</p>
                                        <p><span className="me-2">{phone} </span> E-mail: info@example.com</p>
                                        <p><span className="me-2">{fax}</span> E-mail: info@example.com</p>
                                    </div>
                                    <small className="mt-4 text-muted">The office is in the same parking lot at McDonalds. Haharina street 27, Odessa city.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <Link to="/home#home">
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;