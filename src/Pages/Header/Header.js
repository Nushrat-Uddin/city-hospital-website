import React from 'react';
import './Header.css'

import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark   navColor">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <i className="fas fa-clinic-medical"></i>
                                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <i className="fas fa-users"></i>
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <i className="fas fa-address-card"></i>
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <span className="userName" style={{ color: 'white' }}> {user?.displayName} </span>
                            <li className="nav-item">
                                <i className="fas fa-sign-in-alt"></i>
                                {
                                    user.email ?
                                        <button className="btn btn-secondary logout-btn" onClick={logout}>Log Out</button>
                                        :
                                        <NavLink className="nav-link" to="/login">Login</NavLink>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Banner part */}

            <div className="banner">
                <div className="text-center container">
                    <h1>
                        Welcome To <br />
                        <span>City Hospital</span>
                    </h1>
                    <p>
                    City Hospital Limited Dhaka is the newest hospital one of the largest Bangladeshi health care provider. The hospital is a 150 beds and tertiary care facility, delivering international standard health care at an affordable price to the peoples of Bangladesh.
                    </p>
                </div>
            </div>

        </>
    );
};

export default Header;