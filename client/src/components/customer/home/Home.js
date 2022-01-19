import React, { useState,useEffect } from 'react'
import './Home.css'
import {Carousel,Row,Card,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const [login, setLogin] = useState(false)

    let navi=useNavigate();
    
    const handleEvent=()=>{
        if(!login) navi("/login");
        else navi("/user/event/ad");
    }

    useEffect(() => {
        let lg=localStorage.getItem("isLogin");
        if(lg!==null) setLogin(true);
        else setLogin(false);
    }, [])

    return (
            <div className='home_ctn'>
            <div className='slider_home'>
            
            <Carousel className='back'>
                <Carousel.Item>
                    <div className='slider sl1'>
                    </div>
                    <Carousel.Caption className='welcome' style={{color:"black"}}>
                        <h3>Chào mừng đến TinkerBellGarden</h3>
                        <p>Mở cửa vào tất cả các ngày trong tuần</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='slider sl2'>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='slider sl3'>
                    </div>
                </Carousel.Item>
            </Carousel>
            </div>
            <Row>
                <Card className='ev'>
                    <div className='img'>
                        <Card.Img variant="top" src="" />
                    </div>                  
                        <Card.Body>
                            <Card.Title>Sự kiện 1</Card.Title>
                                <Card.Text>
                                    mô tả
                                </Card.Text>
                            <Button 
                                variant="primary"
                                onClick={()=>handleEvent()}
                            >
                                Xem thêm
                            </Button>
                        </Card.Body>
                </Card>
                <Card className='ev'>
                    <div className='img'>
                        <Card.Img variant="top" src="" />
                    </div>                  
                        <Card.Body>
                            <Card.Title>Sự kiện 1</Card.Title>
                                <Card.Text>
                                    mô tả
                                </Card.Text>
                            <Button variant="primary">Đặt vé</Button>
                        </Card.Body>
                </Card>
                <Card className='ev'>
                    <div className='img'>
                        <Card.Img variant="top" src="" />
                    </div>                  
                        <Card.Body>
                            <Card.Title>Sự kiện 1</Card.Title>
                                <Card.Text>
                                    mô tả
                                </Card.Text>
                            <Button variant="primary">Đặt vé</Button>
                        </Card.Body>
                </Card>
            </Row>
            <div className="home_container">  
                <div className="news_event">
                    <div className="news">
                        <p className='head'>Tin tức</p> 
                        <div className='items'>
                            <div className='item'>
                                <div className='date'>
                                    <p className='month'>Tháng 9</p>
                                    <p className='day'>15</p>
                                </div>
                                <div className='ct'>
                                    <div className='tt'><a href="##">tin tức 1</a></div>
                                    <div className='time'>15/9/2022</div>                                    
                                </div>                              
                            </div>
                            <div className='item'>
                                <div className='date'>
                                    <p className='month'>Tháng 9</p>
                                    <p className='day'>15</p>
                                </div>
                                <div className='ct'>
                                    <div className='tt'><a href="##">tin tức 1</a></div>
                                    <div className='time'>15/9/2022</div>                                    
                                </div>                              
                            </div>
                            <div className='item'>
                                <div className='date'>
                                    <p className='month'>Tháng 9</p>
                                    <p className='day'>15</p>
                                </div>
                                <div className='ct'>
                                    <div className='tt'><a href="##">tin tức 1</a></div>
                                    <div className='time'>15/9/2022</div>                                    
                                </div>                              
                            </div>
                        </div>
                    </div>                                       
                </div>
            </div>
            </div>
    )
}
