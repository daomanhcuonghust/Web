//import React,{Component} from "react";
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
// const logo = require('./logo.png');

const Navbar = () => {
    return (
        <nav className = "navbar">
            <img className="icon1" src ={logo1} alt = "can't not load" />
            <img className="icon2" src ={logo2} alt = "can't not load" />
            <div className="button">
                <button className="button1"href="#">Home</button>
                <button className="button2"href="#">Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;