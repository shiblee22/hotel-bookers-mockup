import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "./Login.css";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import {googleSignin} from '../../Redux/actions/actions'
import {connect} from 'react-redux'
import Navbar from './../Navbar/Navbar';
import google from '../Images/google.png'

const Login = (props) => {
    const location = useLocation()
    const history = useHistory()
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const googleSignInHandle = ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result=>{
            const info = {
                email: result.user.email,
                name: result.user.displayName,
                photoUrl: result.user.photoURL
            }
           props.googleSignin(info)
           history.replace(location.location?.pathname || "/")
        })
     }
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
            <h3 className="text-center mt-3">Login</h3>
            <div className="signin-button mx-auto mt-5" onClick={googleSignInHandle}><img className="signin-img" src={google} alt=""/><h5 className="mx-auto">Login with Google</h5></div>
        </div>
            
        </div>
    );
};

const mapStateToProps = (state) => {
    return { 
        isSignin : state.isSignin,
        userInfo : state.userInfo
    }
}
const mapDispatchToProps = {
    googleSignin:googleSignin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);