import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="nav-header">
            <div className="nav-logo">Logo</div>
            <ul className="nav-link">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/product">Product</Link>
                </li>
                <li>
                    <Link to="/e-comerce">E-Comerce</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
};

export default Navigation;