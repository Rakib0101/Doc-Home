
import { faAddressCard, faClock } from '@fortawesome/free-regular-svg-icons';
import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import UserProfile from '../../UserProfile/UserProfile';
const TopHeader = () => {
    const clockIcon = <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
    const addressIcon = <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
    const loginIcon = <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon>
    const userIcon = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>

    const { user } = useAuth()
    const [profile, setProfile] = useState('hide')
    
    const toggle = () => {
        profile === "show" ? setProfile('hide') : setProfile('show')
    }

    return (
        <div className='px-4 flex py-2 justify-between'>
            <div className='w-2/3 flex items-center'>
                <div className=' items-center mr-4 flex'>
                    <div className='text-4xl text-blue-500'>{clockIcon}</div>
                    <div className='text-sm pl-2'>
                        <p className="text-xs md:text-sm">Mon – Fri : - 8:00 AM - 8:00 PM</p>
                        <p className="text-xs md:text-sm">Sat - Sun : - Closed</p>
                    </div>
                </div>
                <div className='hidden md:flex items-center'>
                    <div className='text-4xl text-blue-500'>{addressIcon}</div>
                    <div className='text-sm pl-2'>
                        <p>121 King Street, Melbourne,</p>
                        <p>Victoria 3000 Australia</p>
                    </div>
                </div>
            </div>
            <div className="w-1/3">
                <div className=''>
                    {(user?.email || user?.displayName) ? (
                        <div className="text-right relative">
                            <h2
                                onClick={toggle}
                                className='cursor-pointer border-2 inline-block primary-color border-black px-2 py-1 rounded-full'
                            >
                                {userIcon}
                            </h2>
                            <div>
                                {profile === "show" ? (
                                    <UserProfile></UserProfile>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className='text-right'>
                            <button className='bg-color text-white rounded px-4 py-1'>
                                <Link to='/login'>{loginIcon} Login</Link>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopHeader;