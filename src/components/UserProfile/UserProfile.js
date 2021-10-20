import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const UserProfile = () => {
    const {user, logOut} = useAuth()
    const userIcon = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
    return (
        <div className='w-48 bg-black absolute right-0 rounded text-white text-center z-50 overflow-auto '>
            <div className='container mx-auto'>
                <div>
                    {user?.photoURL ? (
                        <img className="w-24 h-24 mt-4 rounded-full mx-auto" src={user.photoURL} alt='' />
                    ) : (
                        <div className='text-4xl py-4'>{userIcon}</div>
                    )}
                </div>
                <div>
                    <h2>{user.displayName}</h2>
                    <div>
                        <button className='bg-white my-4 px-2 py-1 rounded primary-color'>
                            <Link to="/my-account">View Profile</Link>
                        </button>
                    </div>
                    <hr />
                    <div className='text-left px-4 pb-4'>
                        <h2>Appointment History</h2>
                        <h2>Last Visited Doctor</h2>
                        <h2>Favourite Doctors</h2>
                    </div>
                    <div>
                        <button
                            className='bg-white px-4 py-1 primary-color mb-4'
                            onClick={logOut}
                        >
                            LogOut
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;