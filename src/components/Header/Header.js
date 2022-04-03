import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='p-3 bg-dark d-flex flex-column flex-md-row flex-lg-row justify-content-center align-items-center'>
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/reviews">Reviews</CustomLink>
            <CustomLink to="/dashboard">Dashboard</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </nav>
    );
};

export default Header;