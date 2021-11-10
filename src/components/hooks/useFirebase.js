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
    const googleLogin = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setError('');
            }).finally((error) => {
                setIsLoading(false);
                setError(error.message);
            });
    }
    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result?.user;
                setUser(user);
                setError('');
            })
            .finally((error) => {
                setIsLoading(false);
                setError(error.message);
            });
    }
    const registration = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setError('');
                updateName();
                setUser(user);

            })
            .finally((error) => {
                setIsLoading(false);
                setError(error.message);

            });
    }
    const logOut = () => {
        signOut(auth).then(() => {
            setUser('');
            setError('');
        }).finally((error) => {
            setIsLoading(false);
            setError(error.message);
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
    }, []);
    return {
        googleLogin, error, user, password, setPassword, email, setEmail, login, setName, registration, logOut, isLoading
    }
}

export default useFirebase;