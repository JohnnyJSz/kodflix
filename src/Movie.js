import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie({ name , cover }) {
    return (
        <Link to='/details' className='titles'>
            <img src={cover} alt={`${name} cover`} />
            <div className='overlayTitle'>
                <h1>{name}</h1>
            </div>
        </Link>
    )
}
