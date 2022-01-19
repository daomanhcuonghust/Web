import React from "react";
import { Carousel, Badge, ButtonToolbar, ButtonGroup } from 'react-bootstrap';


export default function Event() {
    return (
            <div className="inner2">
            <form>
                <h3>Lưu Niệm Đá Chàm <Badge variant="secondary">On sale</Badge></h3>
                <hr size="1"  color="gray"/>  
                <p>20 khu mua sắm với hơn 2.000 mặt hàng phong phú, phân bổ khắp Sun World Ba Na Hills như nhà ga, khu Trưng bày Tượng sáp, nhà hàng Doumer, Fantasy Park, các nhà ga đến… Đặc biệt, khu mua sắm đẳng cấp tại Làng Pháp với đủ lĩnh vực từ thời trang, mỹ phẩm, trang sức, túi xách, đồ lưu niệm…sẽ mang đến cho du khách nhiều sự lựa chọn và trải nghiệm mua sắm thời thượng trong không gian vô cùng ấn tượng.</p>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://banahills.sunworld.vn/wp-content/uploads/2018/08/e.jpg"
                        alt="First slide"
                    />
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://banahills.sunworld.vn/wp-content/uploads/2018/08/e4.jpg"
                        alt="Second slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.klook.com/image/upload/v1618816502/blog/r8hwluurwkv1cyp1wtgv.webp"
                        alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
                <br/>
   
                <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
                    <ButtonGroup/>
                    <ButtonGroup> 
                        <button type="submit" className="btn btn-primary btn-lg" aria-describedby="btnGroupAddon2">
                            Buy ticket now
                        </button> 
                    </ButtonGroup>
                </ButtonToolbar>
                </form>
                </div>           
    )
};