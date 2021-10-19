import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // get email
    const getEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    // get password
    const getPassword = (e) => {
        const password = e.target.value;
        setPassword(password);
        setError('')
    }

    // authenticate using password
    const signInUsingPassword = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
            .finally(() => setIsLoading(false))

    }

    // login with email and password
    const logInWithEmailPassword = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })

    }

    // authenticate using google
    const signInUsingGoogle = () => {
        // isLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    // authenticate using facebook
    const signInUsingFb = () => {

        const fbProvider = new FacebookAuthProvider();
        signInWithPopup(auth, fbProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                console.log(error.message);
            })
            .finally(() => setIsLoading(true))

    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }

    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [])



    return {
        signInUsingGoogle,
        signInUsingFb,
        user,
        error,
        logOut,
        getEmail,
        isLoading,
        getPassword,
        signInUsingPassword,
        logInWithEmailPassword
    }

}

export default useFirebase;