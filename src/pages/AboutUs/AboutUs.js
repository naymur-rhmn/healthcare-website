import React from 'react';
import './AboutUs.css'
import { faLocationArrow, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import ContactUs from '../ContactUs/ContactUs';
const location = <FontAwesomeIcon icon={faLocationArrow} />
const time = <FontAwesomeIcon icon={faClock} />
const envelope = <FontAwesomeIcon icon={faEnvelope} />


const AboutUs = () => {
    return (
        <div>
            <div className="sort-info py-4">
                <div className="container">
                    <div className="row text-lg-center">
                        <div className="col-lg-4 col-12 py-lg-3 py-2">
                            <span className="pe-3 me-3 border-secondary border-end">{location}</span><span>45 West Dental Street, Newyork 1003</span>
                        </div>
                        <div className="col-lg-4 col-12 py-lg-3 py-2">
                            <span className="pe-3 me-3 border-secondary border-end">{envelope}</span><span>Supportuteam@Dentalcare.com</span>
                        </div>
                        <div className="col-lg-4 col-12 py-lg-3 py-2">
                            <span className="pe-3 me-3 border-secondary border-end">{time}</span><span>Weekdays: 09.00am to 18.00pm</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row p-5 my-lg-5 my-sm-2">
                    <div className="col-lg-6">
                        <img className="img-fluid mb-sm-4" src="https://i.ibb.co/cgyQDcv/w-dental.jpg" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="about-h2 mb-5">Welcome to Dentalcare</h2>
                        <p className="fs-4 fw-light">One of the finest & most advanced dental clinic</p>
                        <p className="text-secondary fw-light">We have built an enviable reputation in the consumer goods, heavy industry, high-tech, manufacturing, medical, recreational vehicle, and transportation sectors. multidisciplinary team of engineering experts.</p>
                        <p className="text-secondary fw-light">Who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain.</p>
                        <button className="btn about-btn border-0 rounded-0 px-4 py-3">MEET DENTIST</button>
                    </div>
                </div>
                <hr />
            </div>

            <div className="container bs">
                <div className="row p-5 text-sm-center text-lg-start my-lg-5 my-sm-2">
                    <div className="col-lg-6 col-md-12 mb-sm-4">
                        <div className="row">
                            <div className="col-lg-6 mb-sm-3">
                                <img className="img-fluid" src="https://i.ibb.co/PM25NcZ/mission.jpg" alt="" />
                            </div>
                            <div className="col-lg-6">
                                <h4 className="fw-light">Our Mission</h4>
                                <p className="fw-light text-secondary">Our mission is to offer to our patients the finest dental care in mid Missouri & provide exceptional, prompt customer service.</p>
                                <button className="btn ps-0 fw-bold">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6  col-md-12 mt-0 mt- ">
                        <div className="row">
                            <div className="col-lg-6 mb-sm-3">
                                <img className="img-fluid" src="https://i.ibb.co/x2zD0SC/vision.jpg" alt="" />
                            </div>
                            <div className="col-lg-6">
                                <h4 className="fw-light">Our Vision</h4>
                                <p className="fw-light text-secondary">It is our vision to exceed our patients’ expectations in every way possible. We will succeed by providing the best quality dental care complemented.</p>
                                <button className="btn ps-0 fw-bold">Read More </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <ContactUs></ContactUs>
        </div>
    );
};

export default AboutUs;