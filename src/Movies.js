import React from 'react';

export default function Movie(props) {
    return (
        <div className='titles'>
            <img src={props.cover} alt={`${props.name} cover`} />
            <div className='overlayTitle'>
                <h1>{props.name}</h1>
            </div>
        </div>
    );
}
