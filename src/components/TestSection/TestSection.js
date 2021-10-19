import React from 'react';
import { Link } from 'react-router-dom';
import useTest from '../../hooks/useTest'
import SingleTest from '../SingleTest/SingleTest';
import bg from '../../img/bg-2.jpg'

const TestSection = () => {
    const [tests] = useTest()
    return (
        <div
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${bg})`,
                backgroundAttachment: 'fixed'
            }}
            className='bg-color py-24'>
            <div className='container mx-auto'>
                <h2 className='text-5xl font-bold text-center text-white mb-8'>
                    We offer discounts for this tests
                </h2>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                    {tests.slice(0, 6).map((test) => (
                        <SingleTest key={test.testId} test={test}></SingleTest>
                    ))}
                </div>
                <div className="text-center pt-8">
                    <button className="bg-white rounded px-4 py-1 primary-color font-bold ">
                        <Link to="/tests">More Tests Info</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestSection;