import React,{useState} from "react";
import { useNavigate } from "react-router-dom"

export default function SignUp() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [nbphone, setNbphone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister=()=>{
        
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
                            onClick={()=>handleRegister()}
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
