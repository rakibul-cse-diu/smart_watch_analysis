import React from 'react';

const NoPageFound = () => {
    return (
        <div className='w-100 d-flex justify-content-center'>
            <div className='p-5 w-75 text-center'>
                <h1 className='text-danger'>404</h1>
                <strong className='fs-2'>Page Not Found</strong>
                <p className='fs-5'>Sorry, the page you looking for does not exist.</p>
            </div>
        </div>
    );
};

export default NoPageFound;