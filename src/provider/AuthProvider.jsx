import React from 'react';
import { createContext } from "react";
import { getAuth } from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const user = { displayName: 'habibur' }

    const userInfo = {
        user
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;