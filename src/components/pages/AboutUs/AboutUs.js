import React from 'react';
import bg from '../../../img/hero-bg.jpg'
import AboutUsFirst from '../../AboutUsFirst/AboutUsFirst';
import AboutUsSecond from '../../AboutUsSecond/AboutUsSecond';

const AboutUs = () => {
    return (
        <div>
            <div
                className='py-24'
                style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${bg})`,
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                }}
            >
                <h2 className='text-center text-white text-6xl'>About US</h2>
            </div>
            <AboutUsFirst></AboutUsFirst>
            <AboutUsSecond></AboutUsSecond>

        </div>
    );
};

export default AboutUs;