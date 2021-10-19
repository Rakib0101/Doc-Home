import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo.png'

const FooterTop = () => {
    const arrowIcon = <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
    const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const facebookIcon = <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
    const twitterIcon = <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
    const instagramIcon = <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
    return (
        <div>
            <div className='container py-12 mx-auto'>
                <div className='flex md:flex-row flex-col'>
                    <div className='text-white w-full px-4 md:w-2/6'>
                        <div className='text-white'>
                            <img src={logo} alt='' />
                            <p className='py-4'>
                                Our goal is to deliver quality of care in a
                                courteous, respectful, and compassionate manner. We
                                hope you will allow us to care for you and strive to
                                be the first and best choice for your family
                                healthcare.
                            </p>
                            <button className='font-semibold hover:text-gray-700'>
                                Make an Appointment {arrowIcon}
                            </button>
                        </div>
                    </div>
                    <div className='text-white w-full px-4 md:w-1/6'>
                        <div className='text-white'>
                            <h2 className='text-2xl font-bold pb-4'>Departments</h2>
                            <ul>
                                <li className=' py-2 text-lg'>
                                    <Link to='/' className='hover:text-green-600'>
                                        Neurology Clinic
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link to='/' className='hover:text-green-600'>
                                        Cardioliogy Clinic
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link to='/' className='hover:text-green-600'>
                                        Pathology Clinic
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link to='/' className='hover:text-green-600'>
                                        Labrotory Clinic
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link to='/' className='hover:text-green-600'>
                                        Pedriatic Clinic
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link to='/' className='hover:text-green-600'>
                                        Blood Bank
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-white px-4 w-full md:w-1/6'>
                        <div className='text-white'>
                            <h2 className='text-2xl font-bold pb-4'>
                                Important Links
                            </h2>
                            <ul>
                                <li className=' py-2 text-lg'>
                                    <Link to='/' className='hover:text-green-600'>
                                        About Us
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link to='/' className='hover:text-green-600'>
                                        Services
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link to='/' className='hover:text-green-600'>
                                        Doctors
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link to='/' className='hover:text-green-600'>
                                        Contact
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link to='/' className='hover:text-green-600'>
                                        Login
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link to='/' className='hover:text-green-600'>
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg w-5/6 mx-auto md:w-2/6 p-8'>
                        <div className='text-center'>
                            <h2 className='text-2xl'>Quick Contacts</h2>
                            <p>
                                If you have any questions or need help, feel
                                free to contact with our team.
                            </p>
                            <h2 className='text-4xl py-4'>{phoneIcon}01061245741</h2>
                            <p>
                                2307 Beverley Rd Brooklyn, New York 11226 United
                                States.
                            </p>
                            <div className='flex flex-col md:flex-row'>
                                <div className="md:w-2/3 w-full">
                                    <button>{arrowIcon} Get Directions</button>
                                </div>
                                <div className='md:w-1/3 w-full'>
                                    <span className="px-1">{facebookIcon}</span>
                                    <span className="px-1">{twitterIcon}</span>
                                    <span className="px-1">{instagramIcon}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;