import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-title text-center mb-5">
                            <h2>Book an appointment</h2>
                            <p className="fs-4 text-secondary">Feel free to book an appointment online or call us at +380 99 000 00 00</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 mx-auto px-5 px-sm-5 px-md-5 px-lg-0">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6 mb-md-4 mb-sm-4 mb-4">
                                            <label htmlFor="name">NAME</label><br />
                                            <input className="w-100 p-2 border" type="text" id="name" placeholder="Enter Name" />
                                        </div>
                                        <div className="col-lg-6  mb-md-4 mb-sm-4  mb-4">
                                            <label htmlFor="email">Email</label><br />
                                            <input className="w-100 p-2 border" type="email" id="email" placeholder="Enter E-mail" />
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-lg-6 mb-md-4 mb-sm-4 mb-4">
                                            <label htmlFor="phone">PHONE NUMBER</label><br />
                                            <input className="w-100 p-2 border" type="text" id="phone" placeholder="Enter Phone Number" />
                                        </div>
                                        <div className="col-lg-6 mb-md-4 mb-sm-4 mb-4">
                                            <label htmlFor="date">APPOINMENT DATE</label><br />
                                            <input className="w-100 p-2 border" type="date" id="date" />
                                        </div>
                                        <div className="col-lg-12 mb-4">
                                            <label htmlFor="message">MESSAGE</label>
                                            <textarea className="w-100 p-2 border" name="" id="message" cols="30" rows="10" placeholder="Enter your message" ></textarea>
                                        </div>
                                    </div>
                                    <div className="text-center mt-4">
                                        <button className="gradient-btn">Confirm appoinment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;