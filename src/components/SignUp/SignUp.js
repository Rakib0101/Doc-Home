import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import signUp from "../../img/signup.png";

const SignUp = () => {
    const googleImg = <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>;
    const githubImg = <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>;
    const {
        handleGoogleSignIn,
        handleGithubSignIn,
        getName,
        getEmail,
        getPassword,
        setError,
        error,
        setUser,
        setIsLogin,
        auth,
        userName,
        updateProfile,
        registerWithEmailAndPass,
    } = useAuth();
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
    const emailPassRegister = (e) => {
        e.preventDefault()
        registerWithEmailAndPass()
            .then((result) => {
                const user = result.user;
                setUser(user);
                
                updateProfile(auth?.currentUser, {
                    displayName: userName
                });
                console.log(user);
                history.push(redirect_uri);
            })
            .catch((err) => {
                setError(err.message);
                console.log(err.message);
            })
            .finally(() => {
                setIsLogin(false);
            });
    };
    return (
        <div className='bg-color'>
            <div className='container mx-auto flex flex-col-reverse md:flex-row items-center'>
                <div className='md:w-3/5 w-full text-white'>
                    <div className='glass-effect p-8 md:m-12 m-4 rounded-lg'>
                        <h2 className='custom-color text-4xl'>Sign Up</h2>
                        <p className='my-4'>
                            And enjoy life during the time you just saved!
                        </p>
                        <p className='text-red-600'>{error}</p>
                        <form action='' onSubmit={emailPassRegister}>
                            <div className='flex justify-between mb-2'>
                                <div className='w-1/2 mr-2'>
                                    <label htmlFor=''>Full Name</label>
                                    <br />
                                    <input
                                        onBlur={getName}
                                        className='w-full glass-effect rounded py-2 pl-4'
                                        type='text'
                                        placeholder='Full Name'
                                    />
                                </div>
                                <div className='w-1/2 ml-2'>
                                    <label htmlFor=''>Email Address</label>
                                    <br />
                                    <input
                                        onBlur={getEmail}
                                        className='w-full glass-effect rounded py-2 pl-4'
                                        type='text'
                                        placeholder='Email Address'
                                    />
                                </div>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor=''>Password</label>
                                <br />
                                <input
                                    onBlur={getPassword}
                                    className='w-full glass-effect rounded py-2 pl-4'
                                    type='password'
                                    placeholder='Password'
                                />
                            </div>
                            <div>
                                {/* <input
                                    className='glass-effect mr-2'
                                    type='checkbox'
                                    name=''
                                    id=''
                                /> */}
                                Creating an account means you are okay with our
                                Terms of Service and Privacy Policy
                            </div>
                            <div>
                                <input
                                    className='primary-color text-xl rounded mt-4 custom-bg px-8 py-2'
                                    type='submit'
                                    value='Create An Account'
                                />
                            </div>
                        </form>
                        <div className='flex flex-col md:flex-row justify-between my-8'>
                            <p>{error}</p>
                            <button
                                onClick={googleLogin}
                                className='px-4 py-2 mb-2 md:mb-0 w-full mr-2 bg-color rounded'
                            >
                                {googleImg} Sign up with Google
                            </button>
                            <button
                                onClick={githubLogin}
                                className='px-4 py-2 w-full md:ml-2 bg-color rounded'
                            >
                                {githubImg} Sign up with Github
                            </button>
                        </div>
                        <h2 className='my-8'>
                            Already have an account ?{" "}
                            <Link
                                className='primary-color font-bold'
                                to='/login'
                            >
                                Sign In
                            </Link>
                        </h2>
                    </div>
                </div>
                <div className='md:w-2/5 w-full'>
                    <img src={signUp} alt='' />
                </div>
            </div>
        </div>
    );
};

export default SignUp;