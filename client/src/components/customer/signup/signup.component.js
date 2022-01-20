import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

export default function SignUp() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [nbphone, setNbphone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    let navi=useNavigate();

    const handleRegister=async (e)=>{
        e.preventDefault();
        const data={
            phoneNumber:nbphone,
            email,
            password,
            firstName:firstname,
            lastName:lastname
        }
        if(password===confirmPassword){
            try{
                const res=await axios.post("http://localhost:5000/api/v1/signup",data);
                console.log(res);
                if(res.data.succes){
                    localStorage.setItem("accessToken",res.data.accessToken);
                    localStorage.setItem("nameUser",res.data.data.firstName+' '+res.data.data.lastName);
                    navi("/user");
                }
            }catch(err){
                alert("err");
            }
        }
       
    }

    return (
        <div className="outer">
            <div className="inner">
                <form>
                    <h3>Register</h3>
                        <div className="form-group">
                            <label>First name</label>
                            <input
                                type="text" 
                                className="form-control" 
                                placeholder="Enter your first name" 
                                onChange={(e)=>setFirstname(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input
                                type="text" 
                                className="form-control" 
                                placeholder="Enter your last name" 
                                onChange={(e)=>setLastname(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone number</label>
                            <input 
                                type="Phone number" 
                                className="form-control" 
                                placeholder="Enter your phone number" 
                                onChange={(e)=>setNbphone(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Enter email" 
                                onChange={e=>setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Enter password" 
                                onChange={e=>setPassword(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Confirm password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Confirm password"
                                onChange={e=>setConfirmPassword(e.target.value)}    
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-dark btn-lg btn-block"
                            onClick={(e)=>handleRegister(e)}
                        >
                            Register
                        </button>
                        <p className="forgot-password text-right">
                                        Already registered <a href="/login">log in?</a>
                        </p>
                </form>
            </div>
        </div>
    )
}
