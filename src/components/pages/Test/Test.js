import React from "react";
import useTest from "../../../hooks/useTest";
import SingleTest from "../../SingleTest/SingleTest";
import bg from '../../../img/hero-bg.jpg'

const Test = () => {
    const [tests] = useTest();
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
                <h2 className='text-center text-white text-6xl'>
                    Tests
                </h2>
            </div>
            <div className="bg-color py-12">
                <div className='container mx-auto'>
                    <h2 className='text-4xl text-center text-white mb-8'>
                        We offer discounts for this tests
                    </h2>
                    <div className='grid grid-cols-2 gap-8'>
                        {tests.map((test) => (
                            <SingleTest
                                key={test.testId}
                                test={test}
                            ></SingleTest>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;
