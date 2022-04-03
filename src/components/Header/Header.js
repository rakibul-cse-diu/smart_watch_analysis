import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='m-2 d-flex justify-content-center align-items-center'>
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/reviews">Reviews</CustomLink>
            <CustomLink to="/dashboard">Dashboard</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </nav>
    );
};

export default Header;