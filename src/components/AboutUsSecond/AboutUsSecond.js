import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import image from '../../img/about-second.jpg'
const AboutUsSecond = () => {
    const playIcon = <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>;
    const arrowIcon = <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>;
    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex md:flex-row flex-col items-center'>
                    <div className='md:w-1/2 w-full p-4'>
                        <h2>HIGHEST QUALITY CARE</h2>
                        <h2 className='text-4xl pt-4 primary-color font-bold'>
                            Complete Medical Solutions in One Place
                        </h2>
                        <p className='py-4 '>
                            Porta semper lacus cursus, feugiat primis ultrice in
                            ligula risus lorem auctor tempus feugiat dolor
                            lacinia cubilia curae integer congue leo metus, eu
                            mollislorem primis in orci integer metus mollis
                            faucibus. An enim nullam tempor sapien gravida donec
                            pretium and ipsum porta justo integer at velna vitae
                            auctor integer congue
                        </p>
                        <h2>Highest Quality Care:</h2>
                        <ul className='my-2'>
                            <li className='flex'>
                                <p className='primary-color text-xl pr-2'>
                                    {arrowIcon}
                                </p>
                                <p>
                                    If your blood doesn’t clot properly – it’s a
                                    haematologist who will conduct the blood
                                    tests, confirm if you have haemophilia, and
                                    offer treatment.
                                </p>
                            </li>
                            <li className='flex'>
                                <p className='primary-color text-xl pr-2'>
                                    {arrowIcon}
                                </p>
                                <p>
                                    When there’s an outbreak of infection in a
                                    hospital, it’s a medical microbiologist or
                                    infection doctor who will advise the
                                    infection control teams and work hard to
                                    contain it.
                                </p>
                            </li>
                            <li className='flex'>
                                <p className='primary-color text-xl pr-2'>
                                    {arrowIcon}
                                </p>
                                <p>
                                    For those having trouble getting pregnant –
                                    it’s a reproductive scientist who will
                                    investigate, diagnose and, where possible,
                                    treat any infertility issues.
                                </p>
                            </li>
                        </ul>
                        <div className='flex mt-4'>
                            <div>
                                <h2 className='primary-color text-3xl pr-2'>
                                    {playIcon}
                                </h2>
                            </div>
                            <div>
                                <h2>Watch Our Video</h2>
                                <h2 className='text-gray-400'>
                                    Duration: 2:40 min
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full pt-12'>
                        <img src={image} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSecond;