import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="menu">
            <Nav className="link-tag p-3 fw-bold ">
                <div className="d-flex justify-content-center gap-4">
                    <Link to="/home">HOME</Link>
                    <Link to="/review">REVIEW</Link>
                    <Link to="/blogs">BLOGS</Link>
                    <Link to="/about">ABOUT</Link>
                </div>
            </Nav>
        </div>
    );
};

export default Header;