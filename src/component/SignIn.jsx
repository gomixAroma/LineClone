import React from 'react';
import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import {auth} from "../firebase.js";

const SingIn = () => {
  function signinWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div className='SignIn'>
        <Button onClick={signinWithGoogle} style={{color : "black", fontSize: "20px"}}>Googleでサインイン</Button>
    </div>
  )
}

export default SingIn
