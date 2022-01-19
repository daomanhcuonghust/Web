import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


export default class VIPRegister extends Component {
    render(){
        return (
            <div className="outer1">
                <div className="inner1">
                    <Container>                        
                        <Row>
                            <Col>
                                <h3> </h3>
                                <label>Chỗ này liệt kê quyền VIP các thứ các thứ</label>
                            
                            </Col>
                            <Col>
                                <form>
                                
                                    <h3>Become VIP member</h3>
                                    
                                    <div className="form-group">
                                        <label>Ngày dự kiến thanh toán</label>
                                        <input type="date" className="form-control" placeholder="Select date"/>
                                    </div>

                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Choose ticket duration</Form.Label>
                                        <Form.Control as="select">
                                            <option>3 months</option>
                                            <option>6 months</option>
                                            <option>12 months</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                                    
                                </form>
                            </Col>
                        </Row>
                        
                    </Container>
                </div>
            </div>
            
        );
        
        
        } 
}