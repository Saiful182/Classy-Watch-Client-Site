import initialization from "../Shared/Firebase/initialization";
import { GoogleAuthProvider, onAuthStateChanged, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

initialization();
const useFirebase = () => {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const auth = getAuth();


    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;

                setUser(user);
                setError('');
            }).catch((error) => {
                setError(error.message);
            });
    }
    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setUser(user);
                setError('');

            })
            .catch((error) => {
                setError(error.message);
            });
    }
    const registration = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setError('');
                updateProfile();
                console.log(user);
            })
            .catch((error) => {
                setError(error.message);

            });
    }
    updateProfile(auth.currentUser, {
        displayName: name
    }).then(() => {
        setError('');
    }).catch((error) => {
        setError(error.message)
    });
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);
    return {
        googleLogin, error, user, password, setPassword, email, setEmail, login, setName, registration
    }
}

export default useFirebase;