import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { axiosSecure } from "../Hooks/useAxiosSecure";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGithub = () => {
        setLoading(true);
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };

            setUser(currentUser);
            console.log('Current User : ',currentUser);
            setLoading(false); 

            if (currentUser) {
                axiosSecure.post('/jwt', loggedUser, {
                    withCredentials:true })
                    .then(res => {
                        console.log('Token Response: ', res.data);
                    })
            }

            else{
                axiosSecure.post('/logout', loggedUser, {
                    withCredentials:true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        })

        return unSubscribe;
    }, [user])

    const authInfo = {
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;