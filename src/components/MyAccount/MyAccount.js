import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import useAuth from '../../hooks/useAuth';

const MyAccount = () => {
    const userIcon = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
    const { user } = useAuth()
    console.log(user);
    return (
        <div className="bg-purple-500">
            <div className='container mx-auto py-12'>
                <div className='grid grid-cols-5 gap-8'>
                    <div className='col-span-1 glass-effect rounded-xl'>
                        <div className='shaddow px-4 py-8'>
                            {user.photoURL ? (
                                <img
                                    className='w-24 mx-auto h-24 rounded-full'
                                    src={user.photoURL}
                                    alt=''
                                />
                            ) : (
                                <span className='mx-auto text-6xl'>
                                    {userIcon}
                                </span>
                            )}
                            <h2 className="text-center text-2xl my-4">{user.displayName}</h2>
                        </div>
                    </div>
                    <div className='col-span-4 glass-effect px-12 py-6 rounded-xl'>
                        <h2 className='text-4xl py-4 my-4'>My Profile</h2>

                        <hr />
                        <div className='flex'>
                            <div className='w-1/4'>
                                <img
                                    className='w-40 h-40 my-2 mx-auto rounded-full'
                                    src={user.photoURL}
                                    alt=''
                                />
                                <div className="text-center mt-8">
                                    <button className='glass-effect px-4 py-2 text-2xl text-black rounded'>
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                            <div className='w-3/4'>
                                <h2 className="text-2xl font-semibold">
                                    Full Name
                                </h2>
                                <h2 className="text-3xl">{user.displayName}</h2>
                                <h2 className="text-2xl font-semibold">
                                    Email Address
                                </h2>
                                <h2 className="text-3xl">
                                    {user.email}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;