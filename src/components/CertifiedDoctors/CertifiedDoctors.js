import React from 'react';
import { Link } from 'react-router-dom';
import certified from "../../img/certified.jpg"

const CertifiedDoctors = () => {
    return (
        <div>
            <div className='glass-effect mx-4 md:mx-0 rounded-xl p-8 flex flex-col-reverse md:flex-row'>
                <div className='md:w-2/5 w-full md:mr-8'>
                    <h2 className="md:text-4xl text-2xl mb-8 text-white">Certified Doctors</h2>
                    <p className="text-white">
                        Our goal is to deliver quality of care in a courteous,
                        respectful, and compassionate manner. We hope you will
                        allow us to care for you and to be the first and best
                        choice for healthcare. We will work with you to develop
                        individualised care plans, including management of
                        chronic diseases. We are committed to being the region’s
                        premier healthcare network providing patient centered
                        care that inspires clinical and service excellence.
                    </p>
                    <button className="bg-color text-white px-4 py-1 my-4 font-semibold rounded">
                        <Link to="/doctors">View All Services</Link>
                    </button>
                </div>
                <div className='md:w-3/5 w-full'>
                    <img src={certified} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CertifiedDoctors;