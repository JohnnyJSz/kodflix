import React from 'react';
import { Link } from 'react-router-dom';

//import MovieData from '.MovieData';

export default function Movie({ id, title , cover }) {
    return (
        <Link to={`/${id}`} className='titles'>
            <img src={cover} alt={`${title} cover`} />
            <div className='overlayTitle'>
                <h1>{title}</h1>
            </div>
        </Link>
    )
}
