import React from 'react';
import './Greetings.css'
const doctor = "https://i.ibb.co/yNKb7qz/dental-team.jpg";

const Greetings = () => {
    return (
        <div className="greetings text-center">
            <div className="row">
                <div className="col-lg-3 g-bg-1 py-5 px-4 col-12 single-gretings">
                    <h6>Root Canals</h6>
                    <p>Our root canal procedures are very afforfdable prices from $200.</p>
                </div>
                <div className="col-lg-3 g-bg-2 py-5 px-4  col-12  single-gretings">
                    <h6>Routine Check-ups</h6>
                    <p>Comprehensive dentel check-ups for both children and adults.</p>
                </div>
                <div className="col-lg-3 g-bg-3 py-5 px-4  col-12 single-gretings">
                    <h6>Teeth Whitening</h6>
                    <p>High quality teeth whitening products and treatments.</p>
                </div>
                <div className="col-lg-3  g-bg-4 py-5 px-4 col-12 single-gretings">
                    <h6>Consult Out Dentist</h6>
                    <p>Comprehensive dentel check-ups for both children and adults.</p>
                </div>
            </div>

            <div className="container">
                <div className="row py-5 g-5 align-items-center">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={doctor} alt="" />
                    </div>
                    <div className="col-lg-6 text-start">
                        <p className="custom-text">Changing Lives One Smile At A Time!
                        </p>
                        <h2 className="heading custom-border mb-5">Welcome to DentalCare</h2>
                        <p className="text-secondary">Nullam eleifend lectus a tortor interdum, non sodales ante vehicula. Proin consequat, at commodo. Donec eros massa, gravida ac lectus et, pharetra interdum lectus. Sed vel scelerisque quam, id fringilla ante. Vivamus sagittis velit quis dictum ultricies.</p>
                        <p className="text-secondary">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Greetings;