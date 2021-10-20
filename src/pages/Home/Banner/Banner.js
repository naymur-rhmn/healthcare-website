import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-content text-white">
                            <h1 className=""><span className="fw-normal">YOUR OWN </span> STOMATOLOGIST</h1>
                            <p>Donec libero dui, dapibus non leo et, molestie faucibus risus. In fermentum tortor et posuere laoreet. Morbi pharetra velit ut varius semper. Donec accumsan et lacus at posuere.</p>
                            <button className="boxed-btn me-3">View our team</button>
                            <Link to="/contact"><button className="boxed-btn">Book a visit</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;