import React from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const user = { displayName: 'habibur' }

    // register user 
    const createUser = (email, password, name) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signin user 
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        user,
        createUser,
        signInUser,

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;