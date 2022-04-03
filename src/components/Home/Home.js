import React from 'react';
import productImg from '../../images/product-img.jpg';

const Home = () => {
    return (
        <div className='ps-5 pe-5 d-flex flex-column justify-content-between align-items-center'>
            <div className='mt-4 d-flex flex-column-reverse flex-md-row flex-lg-row justify-content-between align-items-center'>
                <div className='mt-5 mb-5 d-flex flex-column justify-content-center align-items-center'>
                    <h1>Garmin <span className='text-danger'>Venu 2</span></h1>
                    <p className='w-75 fs-5 text-center'>GPS Smartwatch with Advanced Health Monitoring and Fitness Features, Slate Bezel with Black Case and Silicone Band</p>
                </div>
                <div className='w-50'>
                    <img className='w-100' src={productImg} alt="Garmin Venu 2" />
                </div>
            </div>
            <div>
                <h2>Customer Rreviews (03)</h2>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Home;