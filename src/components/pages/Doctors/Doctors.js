import React from 'react';
import useDoctor from "../../../hooks/useDoctor";
import SingleDoctor from '../../SingleDoctor/SingleDoctor';
import bg from '../../../img/hero-bg.jpg'
const Doctors = () => {
    const [doctors] = useDoctor();

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
                <h2 className='text-center text-white text-6xl'>Meet Our Doctors</h2>
            </div>
            <div className='container mx-auto py-8'>
                <p className='text-center text-xl w-2/3 mx-auto mb-12'>
                    Our administration and support staff all have exceptional
                    people skills and trained to assist you with all medical
                    enquiries.
                </p>
                <div className='grid grid-cols-4 gap-8'>
                    {doctors.map((doctor) => (
                        <SingleDoctor
                            key={doctor.docId}
                            doctor={doctor}
                        ></SingleDoctor>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors;