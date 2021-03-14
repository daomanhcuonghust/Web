//import {Demos, DemoForm} from './demo';
import React,{Component,useState} from "react";
import Footer from './signup/Footer.jsx';
import Navbar from './signup/Navbar.jsx';
import SignUpForm from "./signup/Signupform.jsx";
import Signupform from './signup/Signupform.jsx';
import Signupsuccess from "./signup/Signupsuccesss.jsx";
//import "./signup/Form.css"

export function App() {
    const [isSubmitted,setIssubmitted] = useState(false);
    function submitForm(){
        setIssubmitted(true);
    } 
    return (
        <div>
            <Navbar/>
            {!isSubmitted?<SignUpForm submitForm ={submitForm}/>:<Signupsuccess/>}
            <Footer/>
        </div>
    );
}
