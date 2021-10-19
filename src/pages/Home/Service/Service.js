import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, title, desc, img, subtitle } = service;
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card border-0 single-service rounded">
                <img src={img} alt="" />
                <div className="card-body">
                    <div className="btn-box d-flex mb-3 justify-content-between align-items-center">
                        <p className="m-0 subtitle">{subtitle}</p>
                        <Link to={`/service/${id}`}><button className="btn btn-info">See Details</button></Link>
                    </div>
                    <h5>{title}</h5>
                    <p className="text-secondary">{desc.slice(0, 90)}</p>
                </div>
            </div>
        </div >
    );
};

export default Service;