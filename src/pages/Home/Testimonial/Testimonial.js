import React from 'react';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div className="testimonial py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center mb-4">
                        <h6 className="custom-text">Testimonials</h6>
                        <p className="fs-1">What Our Patients Say</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="card p-5">
                            <p>"Truly an amazing dentist! The office staff is very professional and nice and Dr. Mehdi takes his time to talk to you and answer all your questions and help you as well. I highly recommend Dr. Mehdi to everybody!"</p>
                            <h5>Sofia L</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="card p-5">
                            <p>"I'd give 10 stars if I could! Amazing service all around from the front desk through to the dental procedures. Dr. Aryan is meticulous in his work, explains with great detail everything that needs to done and performs with care. Highly recommended!"</p>
                            <h5>David P</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="card p-5">
                            <p>"Been seeing Dr. Aryan for the past year for Invisalign treatment. Always professional, excellent bedside manner, and thorough. Highly recommend to anyone!! Front desk staff (Everett, Nelly) are great as well."</p>
                            <h5>Steven L</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;