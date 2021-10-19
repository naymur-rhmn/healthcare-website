import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { id } = useParams();
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const unique = service.find(dt => dt.id == id)
    // const { title, subtitle, desc, img } = unique;
    return (
        <div className="service-detail py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-4 col-12">
                                <img className="img-fluid" src={unique?.img} alt="" />
                            </div>
                            <div className="col-lg-8 col-md-8 col-12">
                                <h2>{unique?.subtitle}</h2>
                                <h4>{unique?.title}</h4>
                                <p>{unique?.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;