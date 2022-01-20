import React, { useEffect, useState } from "react";
import { Carousel, Badge, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

export default function Event() {
    const [event, setEvent] = useState({});
    const [login, setLogin] = useState(false);
    let { eventid } = useParams();
    let navi=useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/event/${eventid}`, {
            method: 'GET', // or 'PUT'
        })
        .then(response => response.json())
        .then(data => {
            setEvent(data.result);
        })
        .catch((error) => {
            alert("eror");
        })
    }, []);

    useEffect(() => {
          let accessToken=localStorage.getItem("accessToken");
          if(accessToken){
            setLogin(true);
          } 
          else setLogin(false); 
      },[localStorage.getItem("accessToken")])

    const handleSubmit =()=>{
        if(!login){
            navi("/login");
        }else{
            //callapi
        }
    }
    
    return (
            <div className="inner2">
            <form>
                <h3>{event.name}</h3>
                <hr size="1"  color="gray"/>  
                <p>{event.description}</p>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={event.image}
                        alt="First slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={event.image}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={event.image}
                        alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
                <br/>
                <p style={{fontSize:"15px"}}>Thời gian bắt đầu: {event.time_start}</p>
                <p style={{fontSize:"15px"}}>Thời gian kết thúc: {event.time_end}</p>
                <br/>
                <p style={{fontSize:"18px",color:"green"}}>Khuyến mãi: {event.discount}%</p>
   
                <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
                    <ButtonGroup/>
                    <ButtonGroup> 
                        <button 
                            type="submit" 
                            className="btn btn-primary btn-lg" 
                            aria-describedby="btnGroupAddon2"
                            onClick={()=>handleSubmit()}
                        >
                            Tham gia sự kiện
                        </button> 
                    </ButtonGroup>
                </ButtonToolbar>
                </form>
                </div>           
    )
};