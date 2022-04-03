import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Review = (props) => {
    const { name, img, rating, review } = props.review;
    return (
        <div className='p-2 m-1 mb-3 border border-light rounded'>
            <div>
                <img className='rounded-circle me-2' src={img} alt="profile pic" width={50} height={50} />
                <strong>{name}</strong>
            </div>
            <span className='text-warning'>Rating: {rating}</span>
            <p>{review}</p>
        </div>
    );
};

export default Review;