import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, FacebookAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();



    // authenticate using password
    const signInUsingPassword = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    // authenticate using google
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
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

    }

    const logOut = () => {
        console.log('hello');
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }

    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])


    const getEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const getPassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    return {
        signInUsingGoogle,
        signInUsingFb,
        user,
        logOut,
        getEmail,
        getPassword,
        signInUsingPassword
    }

}

export default useFirebase;