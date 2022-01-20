import React, { useState}  from "react";
import {Form, Col, Row, InputGroup, FormControl} from "react-bootstrap";


export default function ChangeEvent() {
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
                    <h3>Chỉnh sửa sự kiện</h3>
                    <Form.Label>Tên sự kiện</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nhập tên sự kiện"
                        defaultValue="Mark"
                    />
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nhập mô tả"
                        defaultValue="Mark"
                    />
                    <Form.Label>Nội dung</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={4} 
                        required
                        type="text"
                        placeholder="Nhập nội dung"
                        defaultValue="Mark"
                    />
                    <label>Chọn ảnh 1</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">URL</InputGroup.Text>
                        <FormControl
                        required
                        type="text"
                        placeholder="Nhập url ảnh 1"
                        defaultValue="Mark"
                    />
                    
                    </InputGroup>
                    <label>Chọn ảnh 2</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">URL</InputGroup.Text>
                        <FormControl
                        required
                        type="text"
                        placeholder="Nhập url ảnh 2"
                        defaultValue="Mark"
                    />
                    
                    </InputGroup>

                    <label>Chọn ảnh 3</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">URL</InputGroup.Text>
                        <FormControl
                        required
                        type="text"
                        placeholder="Nhập url ảnh 3"
                        defaultValue="Mark"
                    />
                    
                    </InputGroup>
               
                <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
                </Form>
            

            </div>

        );
    
}