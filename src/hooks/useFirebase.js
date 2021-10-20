import { useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
} from "firebase/auth";
import firebaseInit from "../firebase/firebase.init";

firebaseInit();
const useFirebase = () => {
    const auth = getAuth();
    const [userName, setUserName] = useState(" ");
    const [userEmail, setUserEmail] = useState(" ");
    const [userPassword, setUserPassword] = useState(" ");
    const [user, setUser] = useState([]);
    const [error, setError] = useState([]);
    const [isLogin, setIsLogin] = useState(true);

    const getName = (e) => {
        setUserName(e.target.value);
    };
    const getEmail = (e) => {
        setUserEmail(e.target.value);
    };
    const getPassword = (e) => {
        setUserPassword(e.target.value);
    };
    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider(); //Google Provider
        return signInWithPopup(auth, googleProvider)
    }
    
    const handleGithubSignIn = () => {
        const githubProvider = new GithubAuthProvider()
        return signInWithPopup(auth, githubProvider)
    }
    const registerWithEmailAndPass = () => {
        return createUserWithEmailAndPassword(auth, userEmail, userPassword, userName)
    };
    const handleEmailAndPassword = () => {
        return signInWithEmailAndPassword(auth, userEmail, userPassword)
            
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLogin(false);
        });
    }, [auth]);

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        });
        setIsLogin(true)
    };
    return {
        handleGoogleSignIn,
        handleGithubSignIn,
        handleEmailAndPassword,
        registerWithEmailAndPass,
        getName,
        getEmail,
        getPassword,
        updateProfile,
        setIsLogin,
        setError,
        setUser,
        logOut,
        userName,
        user,
        error,
        isLogin,
    };
};

export default useFirebase;
