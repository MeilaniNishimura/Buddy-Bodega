import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, browserLocalPersistence, setPersistence, onAuthStateChanged, signOut } from "@firebase/auth";

export const AuthContext = createContext()

export const AuthProvider = (props) => {

    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    const login = () => {
        setPersistence( auth, browserLocalPersistence)
            .then(() => {
                signInWithPopup(auth, provider)
                    .then((result) => {
                        console.log("User Logged In")
                    })
                    .catch((error) => {
                        
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        
                        const email = error.customData.email;
        
                        console.error(errorCode, errorMessage, email);
                       
                    });
            })
            .catch((err) => console.error(err))
    };
    
    const values = {
        login
    }
    
    return (
        <AuthContext.Provider value={values}>
            { props.children }
        </AuthContext.Provider>
    )
}