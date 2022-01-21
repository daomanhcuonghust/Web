import axios from "axios";
import React, { useState}  from "react";
import {Form, Col, Row, InputGroup, FormControl} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AddEvent() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [role, setRole] = useState(0);
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState(0);
    const [password, setPassword] = useState("");

    let navi=useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(phoneNumber&&firstName&&lastName&&role)

        if(phoneNumber&&firstName&&lastName&&(role+1)&&email&&(salary+100)&&password){
            try{
                const res=await axios.post("http://localhost:5000/api/v1/signup-staff",
                                            {
                                                phoneNumber,
                                                password,
                                                firstName,
                                                lastName,
                                                email,
                                                role,
                                                salary
                                            }
                            ) 
                console.log(res);
                if(res.status==200){
                    alert("tao thanh cong");
                    document.getElementById("form").reset();
                } 
            }catch(error){
                alert("tao that bai")
            }
        }else{
            alert("nhap form di bro");
        }
    }
        return (
            <div className="db">

                <Form id="form">
                    <h3>Thêm nhân viên</h3>
                    <Form.Label>Họ nhân viên</Form.Label>
                    <InputGroup className="mb-3">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nhập tên nhân viên"
                        value={firstName}
                        onChange={e=>setFirstName(e.target.value)}
                    />
                    </InputGroup>
                    <Form.Label>Tên nhân viên</Form.Label>
                    <InputGroup className="mb-3">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nhập tên nhân viên"
                        value={lastName}
                        onChange={e=>setLastName(e.target.value)}
                    />
                    </InputGroup>
                    <Form.Label>Chức vụ</Form.Label>
                    <InputGroup className="mb-3">
                    <Form.Control as="select" defaultValue={role} onChange={(e)=>setRole(e.target.value)}>
                        <option value={0}>Người quản lý</option>
                        <option value={1}>Nhân viên quầy</option>
                        <option value={2}>Nhân viên lễ tân</option>
                    </Form.Control>
                    </InputGroup>

                    <Form.Label>Lương</Form.Label>
                    <InputGroup className="mb-3">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nhập lương"
                        value={salary}
                        onChange={e=>setSalary(e.target.value)}
                    />
                    </InputGroup>

                    <Form.Label>Số điện thoại</Form.Label>
                    <InputGroup className="mb-3">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nhập số điện thoại"
                        value={phoneNumber}
                        onChange={e=>setPhoneNumber(e.target.value)}
                    />
                    </InputGroup>

                    <Form.Label>Email</Form.Label>
                    <InputGroup className="mb-3">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nhập email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                    </InputGroup>
                    
                    <label>Mật khẩu</label>
                    <InputGroup className="mb-3">
                        <FormControl
                        required
                        type="text"
                        placeholder="Nhập mật khẩu"
                        defaultValue=""
                        onChange={e=>setPassword(e.target.value)}
                    />
                    </InputGroup>
                    
                <button onClick={(e)=>handleSubmit(e)} style={{paddingTop : '10px'}} className="btn btn-dark btn-lg btn-block">Submit</button>
                </Form>
            

            </div>

        );
    
}