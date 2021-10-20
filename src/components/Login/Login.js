import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginImg from "../../img/signin.png";

const Login = () => {
    const googleImg = <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>;
    const githubImg = <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>;

    const { handleGithubSignIn, handleGoogleSignIn, handleEmailAndPassword , setUser, setError, setIsLogin} =
        useAuth();
        const location = useLocation();
        const history = useHistory();
        const redirect_uri = location.state?.from || "/";

        const googleLogin = () => {
            handleGoogleSignIn()
                .then((result) => {
                    const user = result.user;
                    setUser(user);
                    history.push(redirect_uri);
                })
                .catch((err) => {
                    const error = err.message;
                    setError(error);
                })
                .finally(() => {
                    setIsLogin(false);
                });
        };
        const githubLogin = () => {
            handleGithubSignIn()
                .then((result) => {
                    const user = result.user;
                    setUser(user);
                    history.push(redirect_uri);
                })
                .catch((err) => {
                    const error = err.message;
                    setError(error);
                })
                .finally(() => {
                    setIsLogin(false);
                });
    };
    const emailPassLogin = () => {
        handleEmailAndPassword()
        .then((result) => {
                setUser(result.user);
                history.push("/");
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => setIsLogin(false));
    }
        return (
            <div className='bg-color'>
                <div className='container mx-auto flex flex-col md:flex-row items-center'>
                    <div className='md:w-3/5 w-full text-white'>
                        <div
                            className='glass-effect p-8 m-12 rounded-lg'
                            action=''
                        >
                            <h2 className='custom-color text-4xl'>Login</h2>
                            <p className='my-4'>
                                And enjoy life during the time you just saved!
                            </p>
                            <form action=''>
                                <div>
                                    <label htmlFor=''>Email Address</label>
                                    <br />
                                    <input
                                        className='w-full glass-effect primary-color rounded py-2 pl-4'
                                        type='text'
                                        placeholder='Email Address'
                                    />
                                </div>
                                <div className='mb-2'>
                                    <label htmlFor=''>Password</label>
                                    <br />
                                    <input
                                        className='w-full glass-effect primary-color rounded py-2 pl-4'
                                        type='text'
                                        placeholder='Password'
                                    />
                                </div>
                                <div>
                                    <input
                                        onClick={emailPassLogin}
                                        className='primary-color text-xl rounded mt-4 custom-bg px-8 py-2'
                                        type='submit'
                                        value='Submit'
                                    />
                                </div>
                            </form>
                            <div className='flex flex-col-reverse md:flex-row justify-between my-8'>
                                <button
                                    onClick={googleLogin}
                                    className='px-2 py-1 md:px-4 md:py-2 w-full mb-2 md:mb-0 md:mr-2 bg-color border-custom'
                                >
                                    {googleImg} Sign up with Google
                                </button>
                                <button
                                    onClick={githubLogin}
                                    className='px-2 py-1 md:px-4 md:py-2 mt-2 md:mt-0 w-full md:ml-2 bg-color border-custom'
                                >
                                    {githubImg} Sign up with Github
                                </button>
                            </div>
                            <h2 className='my-8'>
                                Haven't Account Yet?{" "}
                                <Link
                                    className='primary-color font-bold'
                                    to='/sign-up'
                                >
                                    Sign Up
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className='md:w-2/5 w-full'>
                        <img src={loginImg} alt='' />
                    </div>
                </div>
            </div>
        );
};

export default Login;