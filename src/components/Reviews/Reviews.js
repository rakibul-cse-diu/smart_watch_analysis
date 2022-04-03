import React from 'react';
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='w-100 d-flex justify-content-center align-items-center'>
            <div className='review-container mt-4 d-flex flex-column'>
                {
                    reviews.map(review => <Review review={review} key={review.id}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;