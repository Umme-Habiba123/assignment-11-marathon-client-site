import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {auth} from '../../firebase/firebase.init'


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    // create user------
    const createUser=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email,password) 
    }

    // signIn user-------
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    // sign out user-----
    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }

    // unSubscribe----
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
         setUser(currentUser) 
         setLoading(false)
         console.log('user in the authState change',currentUser)  
        })
        return () =>{
           unSubscribe()
        } 
    },[])


    const authInfo={
      createUser,
      loading,
      setLoading,
      signInUser,
      user,
      setUser,
      signOutUser,

    }
    return (
       <AuthContext value={authInfo}>
               {children}
       </AuthContext>
    );
};

export default AuthProvider;