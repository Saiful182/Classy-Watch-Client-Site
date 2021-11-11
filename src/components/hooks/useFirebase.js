import initialization from "../Shared/Firebase/initialization";
import { GoogleAuthProvider, onAuthStateChanged, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
initialization();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
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
                saveUser(user.email, user.displayName, 'PUT');
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => {
                setIsLoading(false)
            });
    }
    const login = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = result?.user;
                setError('');
            }).catch((error) => {
                setError(error.message);
            }).finally(() => {
                setIsLoading(false)
            });
    }
    const registration = (name, email, password, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                updateProfile(auth.currentUser, { displayName: name })
                    .then((result) => {
                        console.log(result.length);
                        setError('');
                    }).catch((error) => {
                        setError(error.message)
                    });
                saveUser(email, name, 'POST');
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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, []);

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => {

            })
    }

    return {
        googleLogin, error, user, login, registration, logOut, isLoading
    }
}
export default useFirebase;