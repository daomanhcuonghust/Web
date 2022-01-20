import React,{useState,useEffect} from 'react'
import { Form, Card, Button, Row, Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

export default function EventList() {
    const [listEvent, setListEvent] = useState([]);

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
        return (
            <div className="eventList">
                <Row md={4}>
                {
                    listEvent.map(ev=>
                        <Col md={4} style={{marginBottom:"25px"}}>
                            <Card className='av'>
                                <Card.Img variant="top" src={ev.image} height="300" />
                                <Card.Body>
                                    <Card.Title>{ev.name}</Card.Title>
                                    <Card.Text>
                                        {ev.description}
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <p className="seeMore">
                                        <Link to={`/user/event/${ev._id}`}>Xem thêm</Link>
                                    </p>
                                </Card.Footer>
                            </Card>
                        </Col> 
                    )
                } 
                </Row>
                
            <Outlet/>
            </div>
        )
}
                                                        