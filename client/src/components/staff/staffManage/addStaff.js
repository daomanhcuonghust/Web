import React, { useState}  from "react";
import {Form, Col, Row, InputGroup, FormControl} from "react-bootstrap";

export default function AddEvent() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [role, setRole] = useState(0);
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState();
    const [password, setPassword] = useState("");


        return (
            <div className="db">

                <Form>
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
                        <option value={2}>Nhân viên lễ tân</option>
                        <option value={1}>Nhân viên quầy</option>
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
                    
                <button type="submit" style={{paddingTop : '10px'}} className="btn btn-dark btn-lg btn-block">Submit</button>
                </Form>
            

            </div>

        );
    
}