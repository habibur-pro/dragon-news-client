import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)



    // register user 
    const createUser = (email, password, name) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signin user 
    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // set diplayName 
    const updateUserProfile = (userName) => {
        setLoader(true)
        console.log('update name', userName)
        return updateProfile(user, {
            displayName: userName,

        })
    }

    // user log out 
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    // set observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('observer user', loggedUser)
            setUser(loggedUser)
            setLoader(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const userInfo = {
        user,
        createUser,
        signInUser,
        updateUserProfile,
        logOut,
        loader

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;