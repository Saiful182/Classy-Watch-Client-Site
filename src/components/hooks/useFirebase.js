import initialization from "../Shared/Firebase/initialization";
import { GoogleAuthProvider, onAuthStateChanged, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initialization();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleLogin = (location, history) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = result.user;
                setUser(user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => {
                setIsLoading(false)
            });
    }
    const login = (location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = result?.user;
                setUser(user);
                setError('');
            }).catch((error) => {
                setError(error.message);
            }).finally(() => {
                setIsLoading(false)
            });
    }
    const registration = (location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = userCredential.user;

                setError('');
                updateName();
                setUser(user);
                console.log(user);

            }).catch((error) => {
                setError(error.message);
            }).finally(() => {
                setIsLoading(false)
            });
    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser('');
            setError('');
        }).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setIsLoading(false)
        });
    }
    const updateName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => {

                setError('');

            }).catch((error) => {
                setError(error.message)
            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
    }, [auth]);
    return {
        googleLogin, error, user, password, setPassword, email, setEmail, login, setName, registration, logOut, isLoading
    }
}

export default useFirebase;