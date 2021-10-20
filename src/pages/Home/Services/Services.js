import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id="services" className="services py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto">
                        <div className="service-title text-center">
                            <small className="custom-text mb-3 d-inline-block">Professional and highly trained
                            </small><br />
                            <h2 className="custom-border fs-1 fw-bold mb-4">
                                Our Services
                            </h2>
                            <p className="text-secondary">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                        </div>
                    </div>
                </div>

                <div className="row g-4">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;