import React, {useEffect, useState} from "react"
import {Button, Form, Row, Col} from "react-bootstrap"
import './stallTicket.css'

const star = <span style={{color:'red'}}>*</span>;

function StallTicket() {
    const [showForm, setShowForm] = useState(false);
    const [ticketList, setTicketList] = useState([]);
    const [idTicket, setIdTicket] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [demoP, setDemoP] = useState(0);


    useEffect(() => {
        fetch("http://localhost:5000/api/v1/ticket/61eab0db9cc06741fc0d4ce6", {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            setTicketList(data.result.type);
        })
        .catch((error) => {
            alert("eror");
        })
    }, []);
    
    useEffect(() => {
        ticketList.map(tk=>{
            if(tk._id===idTicket){
                setDemoP(tk.price*quantity);
                return;
            }
        })
    }, [quantity,idTicket]);

    return (
        <div style={{  minHeight: '100%',
            width: '100%',
            backgroundColor: '#4158D0',
            backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'}}>
        <div className="outer">
            <div className="stallTicket">
                {!showForm
                    ? <Button id='b1' onClick={() => setShowForm(!showForm)}>Tạo vé</Button>
                    : <>
                    <Form>
                        <Form.Group>
                            <Form.Label>Tên khách hàng</Form.Label>
                            <Form.Control placeholder="Tên khách hàng"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Số điện thoại{star}</Form.Label>
                            <Form.Control type="tel" placeholder="Số điện thoại"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Loại vé{star}</Form.Label>
                            <Form.Control as="select" onChange={e=>setIdTicket(e.target.value) }>
                                {
                                    ticketList.map((option) => 
                                        <option value={option._id}>{option.nameTicket}</option>
                                    )
                                }
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Số lượng{star}</Form.Label>
                            <Form.Control onChange={e=>setQuantity(e.target.value) } type="number" defaultValue="1" min="1"/>
                        </Form.Group>
                        {/* <Form.Group>
                            <Form.Label>Mã giảm giá</Form.Label>
                            <Form.Control placeholder="vd. 2021DDD"/>
                        </Form.Group> */}
                        <hr/>
                        <p>Giá tiền thanh toán: {demoP}vnđ</p>
                        <Button onClick={() => setShowForm(!showForm)}>Xác nhận</Button>
                        <Button style={{ marginLeft:"40px" }} variant='danger' onClick={() => setShowForm(!showForm)}>Hủy bỏ</Button>
                    </Form>
                    </>
                }
            </div>
        </div>
        </div>

    )
}
export default StallTicket