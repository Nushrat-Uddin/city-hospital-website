import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="bgColor px-5 py-4">
                <div className="row g-5 mx-auto container">
                    <div className="text-left col-md-4">
                        <h3>City Hospital</h3>
                        <p>City Hospital Limited Dhaka is the newest hospital one of the largest Bangladeshi health care provider. The hospital is a 150 beds and tertiary care facility, delivering international standard health care at an affordable price to the peoples of Bangladesh</p>
                    </div>
                    <div className="block icon-list text-left col-md-4">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><i className="fab fa-facebook-square icon"></i>&nbsp;Facebook</li>
                            <li><i className="fab fa-twitter icon"></i>&nbsp;Twitter</li>
                            
                        </ul>

                    </div>
                    <div className="list-style text-left col-md-4 ">
                        <h3>Legal</h3>
                        <h6>Privacy Policy</h6>
                        <h6>Terms And Conditions</h6>
                        <h6>Authorization and authentication</h6>

                    </div>
                </div>
            </div>
            <div className="mx-auto bg-clr py-3">
                <p><i className="far fa-copyright"></i>&nbsp;2021 City Hospital, LLC. All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;