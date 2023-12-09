import { createContext, useEffect, useState } from "react";
import app from "../../../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const Authcontext = createContext(null)
const auth = getAuth(app)
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // create user
    const createUser = async (name, email, password, photo) => {
       setLoading(true)
        const result = await createUserWithEmailAndPassword(auth, email, password);
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
        return result
    }

    // sing in user
    const singInUser =(email, password)=>{
       setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
        
    }

    // google singIn
    const google =()=>{
       setLoading(true)
        const provider= new GoogleAuthProvider();
        return signInWithPopup(auth,provider)
    }


    // logOUt

    const logOut = ()=>{
       setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, createUser=>{
            console.log('user in the on stae change', createUser);
            setUser(createUser)
            setLoading(false)

        })
        return unSubscribe;
    },[])
    
    const userinfo = {
        user,
        createUser,
        singInUser,
        google,
        logOut,
        loading
    }
    return (
        <Authcontext.Provider value={userinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;