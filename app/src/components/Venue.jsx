import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Venue.css';

function Venue({ name, location, capacity, price, url }) {

    return (
        <div className='venue-card'>
            <h2>{name}</h2>
            <div className='venue-info'>
                <p>Location: {location}, California</p>
                <p>Capacity: {capacity}</p>
                <p>Price: ${price}</p>
            </div>
            <a href={url}>See more</a>
            
        </div>
    )
};

export default Venue;