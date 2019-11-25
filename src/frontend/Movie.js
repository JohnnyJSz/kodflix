import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie({ title, cover, id }) {
    return (
        <Link to={`/${id}`} className='titles'>
            <img src={cover} alt={`${title} cover`} />
            <div className='overlayTitle'>
                <h1>{title}</h1>
            </div>
        </Link>
    )
}
