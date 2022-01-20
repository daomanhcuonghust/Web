import React, { useState}  from "react";
import {Form, Col, Row, InputGroup, FormControl} from "react-bootstrap";

export default function AddEvent() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
        return (
            <div className="db">

            
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <h3>Thêm nhân viên</h3>
                    <Form.Label>Tên nhân viên</Form.Label>
                    <InputGroup className="mb-3">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nhập tên nhân viên"
                        
                    />
                    </InputGroup>
                    <Form.Label>Chức vụ</Form.Label>
                    <InputGroup className="mb-3">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nhập tên chức vụ"
                        
                    />
                    </InputGroup>

                    <Form.Label>Lương</Form.Label>
                    <InputGroup className="mb-3">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nhập lương"
                        
                    />
                    </InputGroup>

                    <Form.Label>Số điện thoại</Form.Label>
                    <InputGroup className="mb-3">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nhập số điện thoại"
                        
                    />
                    </InputGroup>
                    
                    <label>Mật khẩu</label>
                    <InputGroup className="mb-3">
                   
                        <FormControl
                        required
                        type="text"
                        placeholder="Nhập mật khẩu"
                        
                    />
                    </InputGroup>
                    
                    
               
                <button type="submit" style={{paddingTop : '10px'}} className="btn btn-dark btn-lg btn-block">Submit</button>
                </Form>
            

            </div>

        );
    
}