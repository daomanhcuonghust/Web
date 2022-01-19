import React,{useState} from "react";
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [role, setRole] = useState("0")
    const [nbphone, setNbphone] = useState("")
    const [password, setPassword] = useState("")

    let navi=useNavigate();

    const hanleSignin=()=>{
        if(nbphone==="user"&&password==="1"){
            if(role==="0"){
                //api login user
                localStorage.setItem("isLogin","true");
                navi("/user/home");
            }else if(role==="1"){
                //api login staff
                localStorage.setItem("isLogin","true");
                navi("/manager");
            }else if(role==="2"){
                //api login staff
                localStorage.setItem("isLogin","true");
                navi("/receptionist");
            }else{
                //api login staff
                localStorage.setItem("isLogin","true");
                navi("/staff");
            }
            
        }
    }

    return (
        <div className="outer">
            <div className="inner">
            <form>
                <h3>Log in</h3>
                <div className="form-group">
                    <label>Phone number</label>
                    <input
                        type="phone number" 
                        className="form-control" 
                        placeholder="Phone number" 
                        onChange={e=>setNbphone(e.target.value)}
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
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Vai trò</Form.Label>
                    <Form.Control as="select" onChange={(e)=>setRole(e.target.value)}>
                        <option value="0">Khách hàng</option>
                        <option value="1">Người quản lý</option>
                        <option value="2">Nhân viên lễ tân</option>
                        <option value="3">Nhân viên quầy</option>
                    </Form.Control>
                </Form.Group>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button 
                    type="submit" 
                    className="btn btn-dark btn-lg btn-block"
                    onClick={()=>hanleSignin()}
                >
                    Sign in
                </button>
                <p className="forgot-password text-right">
                    Forgot <a href="##">password?</a>
                </p>
            </form>
            </div>
        </div>
    )
}
