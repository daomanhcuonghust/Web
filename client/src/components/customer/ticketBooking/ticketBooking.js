import React, { useEffect, useState } from "react"
import {Form, Button,Col,Row} from "react-bootstrap"

function TicketBooking() {
    const [listTicket, setListTicket] = useState([]);
    const [idTicket, setIdTicket] = useState("");
    const [quantity,setQuantity] = useState(1);
    const [demoP, setDemoP] = useState(0);
    
    useEffect(() => {
        fetch("http://localhost:5000/api/v1/ticket/61e833decf6c0959340548a5", {
            method: 'GET', // or 'PUT'
        })
        .then(response => response.json())
        .then(data => {
            setListTicket(data.result.type);
        })
        .catch((error) => {
            alert("eror");
        })
    }, []);
    
    useEffect(() => {
        listTicket.map(tk=>{
            if(tk._id===idTicket){
                setDemoP(tk.price*quantity);
                return;
            }
        })
    }, [quantity,idTicket]);
    
    const handleSubmit =()=>{
        
    }

    return <div className="outer1">
        <div className="inner1">
            <h3>Đặt vé</h3>
            <Row>
            <Col>
            <Form>
                <Form.Group>
                    <Form.Label>Loại vé</Form.Label>
                    <Form.Control as="select" onChange={e=>setIdTicket(e.target.value)}>
                        <option>Chọn loại vé</option>
                        {
                            listTicket.map(ticket=>
                                <option value={ticket._id}>{ticket.nameTicket}</option>
                            )
                        }
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Số lượng vé</Form.Label>
                    <Form.Control as="select" onChange={e=>setQuantity(e.target.value)}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </Form.Control>
                </Form.Group>
                
            </Form>
            </Col>
            
            <Col>
            <p>Giá tiền dự kiến: {demoP} vnđ</p>
                <Button type="submit" onClick={()=>handleSubmit()}>Đặt vé</Button>
            </Col>
            </Row>
        </div>
    </div>
}
export default TicketBooking
