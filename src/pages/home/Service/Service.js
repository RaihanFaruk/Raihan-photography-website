import React from 'react';
import './service.css';
import  { useNavigate } from 'react-router-dom';


const Service = ({service}) => {
    const navigate = useNavigate();

    const {name, img, description, price} = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigate("/checkout")} className='btn btn-primary'>Order: {name}</button>
        </div>
    );
};

export default Service;