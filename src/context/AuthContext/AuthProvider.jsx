import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init'


const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const [theme, setTheme] = useState('light')

    // create user------
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn user-------
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // sign out user-----
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // Google login------


    // unSubscribe----
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log('user in the authState change', currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    // update user---
    const updatedUser=(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }

    const authInfo = {
        createUser,
        loading,
        setLoading,
        signInUser,
        user,
        setUser,
        signOutUser,
        password,
        setPassword,
        setShowPassword,
        showPassword,
        setTheme,
        theme,
        signInWithGoogle,
        updatedUser

    }
    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;