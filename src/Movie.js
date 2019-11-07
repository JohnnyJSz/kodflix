import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie({ id, name , cover }) {
    return (
        <Link to={`/${id}`} className='titles'>
            <img src={cover} alt={`${name} cover`} />
            <div className='overlayTitle'>
                <h1>{name}</h1>
            </div>
        </Link>
    )
}
