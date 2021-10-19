import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
// import { useEffect } from "react/cjs/react.development";
initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)


            }).catch((error) => {

                setError(error.message);

            });

    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {

                setUser(user);
            }
        })
    }, [])
    return {
        signInUsingGoogle,
        user,
        error,
        logout
    }

}
export default useFirebase;