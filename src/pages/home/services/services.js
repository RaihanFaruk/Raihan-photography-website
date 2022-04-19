import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div id='service' className='container'>
            <div className="row">
            <h1 className='text-Success text-center m-5'>Our services</h1>
            <div className="services-container">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                >
                </Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;