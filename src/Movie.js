import React from 'react';

export default function Movie({ name , cover }) {
    return (
        <div className='titles'>
            <img src={cover} alt={`${name} cover`} />
            <div className='overlayTitle'>
                <h1>{name}</h1>
            </div>
        </div>
    );
}
