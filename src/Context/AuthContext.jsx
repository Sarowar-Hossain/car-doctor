import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase/....firebase.config";

export const authProvider = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser]=useState(null);
  const [loader, setLoader] = useState(true)
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  // google sign in
  const googleSignIn = () => {
    setLoader(false);
    return signInWithPopup(auth, provider);
  };

  // log out

  const userSignOut =()=>{
    return signOut (auth)
  }

  // sign up

  const userSignUp =(email, password)=>{
    setLoader(false);
    return createUserWithEmailAndPassword (auth, email, password);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, user=>{
      setUser(user)
      console.log(user);
      setLoader(false);
    })
    return ()=> unsubscribe();
  },[])

  const info = { user,loader, setLoader, googleSignIn, userSignOut, userSignUp };
  return <authProvider.Provider value={info}>{children}</authProvider.Provider>;
};

export default AuthContext;
