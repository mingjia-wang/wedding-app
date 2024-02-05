import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Venue.css';

function Venue({ name, location, capacity, price }) {

    return (
        <div className='venue-card'>
            <h5>{name}</h5>
            <p>{location}</p>
            <p>{capacity}</p>
            <p>{price}</p>
        </div>
    )
};

export default Venue;