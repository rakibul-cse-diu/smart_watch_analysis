import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useReview from '../../Hooks/useReview';
import productImg from '../../images/product-img.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useReview();
    const cuttedReviews = reviews.slice(0, 3);
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
            <div className='mt-5 mb-5 d-flex flex-column justify-content-center align-items-center'>
                <h2>Customer Rreviews ({reviews.length})</h2>
                <div className='mt-4 d-flex flex-column flex-md-row flex-lg-row'>
                    {
                        cuttedReviews.map(review =>
                            <div className='p-2 m-1 mb-3 border border-light rounded'>
                                <div>
                                    <img className='rounded-circle me-2' src={review.img} alt="profile pic" width={50} height={50} />
                                    <strong>{review.name}</strong>
                                </div>
                                <Rating
                                    initialRating={review.rating}
                                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                                    readonly
                                ></Rating>
                                <p>{review.review}</p>
                            </div>)
                    }
                </div>
                <Link to="/reviews">
                    <button className='btn btn-lg btn-outline-danger'>See All Reviews</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;