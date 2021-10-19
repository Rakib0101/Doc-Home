import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router';
import useDoctor from '../../../hooks/useDoctor'
import doctorProfile from '../../../img/doctor-profile.jpg'

const SingleDoctorDetail = () => {
    const {id} = useParams()
    const [doctors] = useDoctor([])
    const doctor = doctors?.find(val => val.docId === id)
    const emailIcon = <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
    const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>;
    return (
        <div>
            <div
                className='py-24'
                style={{
                    backgroundImage: `url(${doctorProfile})`,
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                }}
            >
                <div className='container mx-auto flex flex-col md:flex-row'>
                    <div className='w-1/2'></div>
                    <div className='md:w-1/2 w-full'>
                        <h2 className='text-white  text-4xl'>
                            {doctor?.docName}
                        </h2>
                        <h2 className='text-white  text-2xl'>
                            {doctor?.docPosition}
                        </h2>
                    </div>
                </div>
            </div>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-2/5 w-full md:pr-12 '>
                        <img className='md:-mt-32 -mt-16' src={doctor?.docImg} alt='' />
                        <div>
                            <h2 className="text-center text-3xl mt-8 primary-color font-bold">Contact Info</h2>
                            <div className="text-center md:text-left">
                                <h2>{phoneIcon} {doctor?.docContact?.mob}</h2>
                                <h2>{emailIcon} {doctor?.docContact?.email}</h2>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-3/5 w-full pt-4 pl-12'>
                        <h2 className='text-4xl pb-4'>About Me:</h2>
                        <p>{doctor?.docDesc}</p>
                        <div className='grid grid-cols-1 gap-y-4'>
                            {doctor?.experience.map((exp) => (
                                <div className='bg-secondary p-4 rounded'>
                                    <h2 className='text-white text-2xl font-bold'>
                                        {exp?.hospitalName}
                                    </h2>
                                    <h2 className='my-4 primary-color text-xl font-bold'>
                                        {exp?.year}
                                    </h2>
                                    <p>{exp?.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDoctorDetail;