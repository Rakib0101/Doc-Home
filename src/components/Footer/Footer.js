import React from 'react';
import { Link } from 'react-router-dom';
import FooterTop from './FooterTop/FooterTop';

const Footer = () => {
    return (
        <div className='bg-green-200'>
            <FooterTop></FooterTop>
            <hr className="h-2 text-black" />
            <div className='container mx-auto py-4'>
                <div className=' text-lg flex flex-col md:flex-row justify-between'>
                    <div>
                        <p>All rights are reserverd</p>
                    </div>
                    <nav>
                        <ul className="flex">
                            <li>
                                <Link to="/">Terms and Services</Link>
                            </li>
                            <li>
                                <Link to="/">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/">Cockies</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <p className='text-center text-lg text-gray-700 font-semibold'>
                        Design Inspiration From Themeforest Mediservice
                        wordpress theme
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;