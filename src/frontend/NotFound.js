import React from 'react';
import { Link } from 'react-router-dom';

export default function notFound() {
    return (
        <div className='not-found'>
            <h1>Ooops, it looks like this page doesn't exist :(</h1>
            <Link className='linkBackHomeDetails' to='/' >Back to home page</Link>
        </div>
    );
}