import React from 'react';
import image from '../../img/about-first.jpg'
import signature from '../../img/signature.png'

const AboutUsFirst = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex items-center'>
                    <div className='w-1/2 pt-12'>
                        <img src={image} alt='' />
                    </div>
                    <div className='w-1/2 p-4'>
                        <h2>WELCOME TO MEDSERVICE</h2>
                        <h2 className='text-4xl pt-4 primary-color font-bold'>
                            Clinic with Innovative Approach to Treatment
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
                        <h3 className='primary-color text-xl font-semibold'>
                            Randon Pexon, Head of Clinic
                        </h3>
                        <img className='w-1/2' src={signature} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsFirst;