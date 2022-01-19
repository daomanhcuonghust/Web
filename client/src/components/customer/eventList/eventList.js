import React from 'react'
import { Form, Card, Button, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export default function EventList() {
        return (
            <div className="eventList">
                <Row md={4} > 
                <Col>
                    <Card  className='av'>
                        <Card.Img variant="top" src="https://banahills.sunworld.vn/wp-content/uploads/2021/05/Travel-and-Guide-Facebook-Cover-1-1024x577.png" height="200" />
                        <Card.Body >
                            <Card.Title> Tinker Bell Garden TẠM NGỪNG ĐÓN KHÁCH THAM QUAN TỪ NGÀY...</Card.Title>
                            <Card.Text>
                                Để cùng chung tay với thành phố Đà Nẵng trong việc phòng chống dịch bệnh, cũng như trước diễn biến phức tạp của dịch Covid-19...
                            </Card.Text>
                        </Card.Body>

                        <Card.Footer>
                            <p className="seeMore">
                                <a href="/user/event/1">Xem thêm</a>
                            </p>
                        </Card.Footer>   
                    </Card>

                   
                    
                </Col>
                    
                    <Col>
                    <Card className='av'>
                        <Card.Img variant="top" src="https://banahills.sunworld.vn/wp-content/uploads/2021/04/1920x1080-2-1024x576.png" height="200" />
                        <Card.Body >
                        <Card.Title>Amazing Tinker Bell Garden – Tinker Bell Garden miền diệu kỳ</Card.Title>
                        <Card.Text>
                        Hãy cùng tới và khám phá  Tinker Bell Garden – miền diệu kỳ với những thanh âm lễ hội rộn ràng mang đậm sắc màu Châu Âu thời...
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <p className="seeMore">
                                <a href="#">Xem thêm</a>
                            </p>
                        </Card.Footer>
                    </Card>
                    </Col>
                    
                    <Col>
                    <Card className='av'>
                        <Card.Img variant="top" src="https://banahills.sunworld.vn/wp-content/uploads/2021/01/1920x1080-Banner-web-Sun-World-1-1024x576.png" height="200" />
                        <Card.Body >
                        <Card.Title>LỄ HỘI HOA XUÂN – “ƯỚC HẸN MÙA XUÂN” tại  BA...</Card.Title>
                        <Card.Text>
                        Với chủ đề “Ước hẹn Mùa Xuân”, lễ hội hoa 2021 tại  Tinker Bell Garden sẽ đưa bạn và gia đình lạc vào một hành...
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <p className="seeMore">
                                <a href="#">Xem thêm</a>
                            </p>
                        </Card.Footer>
                    </Card>
                    </Col>

                    <Col>
                    <Card className='av'>
                        <Card.Img variant="top" src="https://banahills.sunworld.vn/wp-content/uploads/2020/11/cover_851x315.jpg" height="200" />
                        <Card.Body>
                        <Card.Title>GIÁNG SINH: NHỮNG TIẾNG CHUÔNG DIỆU KỲ</Card.Title>
                        <Card.Text>
                        Đà Nẵng đã sẵn sàng đón bạn trở lại trong không khí Giáng ffffffffffffffffffffffffffffffffffffffffffffffffffffsinh ấm áp rực rỡ sắc màu cùng rất nhiều hoạt động hấp dẫn...
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <p className="seeMore">
                                <a href="#">Xem thêm</a>
                            </p>
                        </Card.Footer>
                    </Card>
                    </Col>

                    
                </Row>

                <Row md={4} >
                    <Col>
                        <Card className='av'>
                            <Card.Img variant="top" src="https://banahills.sunworld.vn/wp-content/uploads/2020/11/cover_851x315.jpg" height="200" />
                            <Card.Body>
                            <Card.Title>GIÁNG SINH: NHỮNG TIẾNG CHUÔNG DIỆU KỲ</Card.Title>
                            <Card.Text>
                            Đà Nẵng đã sẵn sàng đón bạn trở lại trong không khí Giáng ffffffffffffffffffffffffffffffffffffffffffffffffffffsinh ấm áp rực rỡ sắc màu cùng rất nhiều hoạt động hấp dẫn...
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <p className="seeMore">
                                    <a href="#">Xem thêm</a>
                                </p>
                        </Card.Footer>
                    </Card>
                    </Col>    
                    <Col>
                        <Card className='av'>
                            <Card.Img variant="top" src="https://danangfantasticity.com/wp-content/uploads/2020/11/sun-world-ba-na-hills-ghi-ten-vao-lich-su-le-trao-giai-world-travel-awards-2020-khu-vuc-chau-a-01.jpg" height="200" />
                            <Card.Body>
                            <Card.Title> Tinker Bell GardenGhi Tên Vào Lịch Sử Lễ Trao Giải World Travel Awards 2020 Khu Vực Châu Á</Card.Title>
                            <Card.Text>
                            Sáng 3/11, lễ trao giải thưởng World Travel Awards (WTA) – Oscar của ngành du lịch ...
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <p className="seeMore">
                                    <a href="#">Xem thêm</a>
                                </p>
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            <Outlet/>
            </div>
        )
}