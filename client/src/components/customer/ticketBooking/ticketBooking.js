import React from "react"
import {Form, Button,Col,Row} from "react-bootstrap"
const calculatePrice = () => {
    return 100000;
}

function TicketBooking() {
    return <div className="outer1">
        <div className="inner1">
            <h3>Đặt vé</h3>
            <Row>
            <Col>
            <Form>
                <Form.Group>
                    <Form.Label>Loại vé</Form.Label>
                    <Form.Control as="select">
                        <option>Chọn loại vé</option>
                        <option>Vé ngày (không giới hạn thời gian trong ngày)</option>
                        <option>Vé lượt (thời gian chơi 2 giờ)</option>
                    </Form.Control>
                </Form.Group>
                {/* <Form.Group>
                        <Form.Label>Ngày sử dụng</Form.Label>
                        <Form.Control type="date" placeholder="Chọn ngày"/>
                    </Form.Group> */}
                {/* <Form.Group>
                    <Form.Label>Sự kiện</Form.Label>
                    <Form.Control as="select">
                        <option value="1">Thường</option>
                        <option value="0.8">Khuyến mãi giảm 20% </option>
                    </Form.Control>
                </Form.Group> */}
                <Form.Group>
                    <Form.Label>Số lượng vé</Form.Label>
                    <Form.Control as="select" defaultValue="1">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </Form.Control>
                </Form.Group>
                
            </Form>
            </Col>
            
            <Col>
            <p>Giá tiền dự kiến: {calculatePrice()} vnđ</p>
                <Button type="submit">Đặt vé</Button>
            </Col>
            </Row>
        </div>
    </div>
}
export default TicketBooking
