import React, { useState,useEffect}  from "react";
import { Col, Row, Card, Button, ButtonToolbar, ButtonGroup} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './eventManage.css'
import { AiOutlineDelete } from 'react-icons/ai';
import {BsPen} from 'react-icons/bs'


export default function EventManage() {
    const [listEvent, setListEvent] = useState([]);

    let navi=useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/allEvent', {
            method: 'GET',
            }
        )
        .then(response => response.json())
        .then(data => {
            setListEvent(data.result);
        })
        .catch((error) => {
            alert("eror");
        })  
    }, []);

    const handleDeteleEvent = (id)=>{

    }
    
        return (
            <div className="em">
<<<<<<< HEAD
                <div className="eventList">
                <Row md={6}>
                {
                    listEvent.map(ev=>
                        <Col md={5} style={{marginBottom:"25px"}}>
                            <Card className='av'>
                                <Card.Img variant="top" src={ev.image[0]} height="200" />
                                <Card.Body>
                                    <Card.Title>{ev.name}</Card.Title>
                                    <Card.Text>
                                        {ev.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <ButtonToolbar
                                    className="justify-content-between"
                                    aria-label="Toolbar with Button groups"
                                >
                                    <ButtonGroup className="mr-2">
                                    </ButtonGroup>
                                    <ButtonGroup className="mr-2">
                                        <Button onClick={()=>navi( `/manager/suask/${ev._id}`)} variant="outline-secondary" style= {{ border: `none` }}>
                                            <BsPen/>
                                        </Button>
                                        <Button onClick={()=>handleDeteleEvent(ev._id)} variant="outline-danger" style= {{ border: `none` }} >
                                            <AiOutlineDelete />
                                        </Button>
                                    </ButtonGroup>
=======
                <Row md={4} > 
                <Col>
                    <Card  className='av'>
                        <div className="ribbon"><span>-50%</span></div>
                        <Card.Img variant="top" src="https://banahills.sunworld.vn/wp-content/uploads/2021/05/Travel-and-Guide-Facebook-Cover-1-1024x577.png" height="200" />
                        <Card.Body >
                            <Card.Title> Tinker Bell Garden TẠM NGỪNG ĐÓN KHÁCH THAM QUAN TỪ NGÀY...</Card.Title>
                            <Card.Text>
                                Để cùng chung tay với thành phố Đà Nẵng trong việc phòng chống dịch bệnh, cũng như trước diễn biến phức tạp của dịch Covid-19...
                            </Card.Text>
                        </Card.Body>

                        <Card.Footer>
                        <ButtonToolbar
                            className="justify-content-between"
                            aria-label="Toolbar with Button groups"
                        >
                            <ButtonGroup className="mr-2">
                                <Button variant="outline-light" style= {{ border: `none` }} >
                                    <a href="#">Xem thêm</a>
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup className="mr-2">
                                <Button onClick={()=>navi("/manager/suask/123")} variant="outline-secondary" style= {{ border: `none` }}>
                                    <BsPen/>
                                </Button>
                                <Button variant="outline-danger" style= {{ border: `none` }} >
                                    <AiOutlineDelete />
                                </Button>
                            </ButtonGroup>
>>>>>>> c50e8f9a1867f3e82613f5fb0550c57becfb06f0
                            
                                </ButtonToolbar>
                                </Card.Footer>   
                            </Card>
                        </Col> 
                    )
                } 
                </Row>
                </div>
            </div>

        );
    
}