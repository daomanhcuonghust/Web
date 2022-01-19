import React from "react"
import {useState} from "react"
import {Button, InputGroup, Form, Tabs, Tab, Badge} from "react-bootstrap"
import {Accordion, Card} from 'react-bootstrap';
import "./reception.css"

const star = <span style={{color:'red'}}>*</span>;

function getTicketList(){
  return [ticket1, ticket2]
}
const ticket1 = {
  phone: '0987654321',
  name: 'Nguyễn Văn A',
  type: 'Vé 2 giờ',
  quantity: 3,
  price: 120000,
  status: 'Chờ check-in'
}
const ticket2 = {
  phone: '0123456789',
  name: 'Nguyễn Văn Z',
  type: 'Vé ngày',
  quantity: 1,
  price: 100000,
  status: 'Chờ check-out'
}
function SearchBar(props) {
  return <div className='search-bar'>
    <InputGroup>
    <Form.Control placeholder='vd. 0987654321'/>
    <Button onClick={props.onClick}>Tìm vé</Button>
    </InputGroup>
  </div>
}
function Ticket(props) {
  const ticket = props.ticket;
  return <div className='ticket'>
    <p>Tên khách hàng: {ticket.name}</p>
    <p>Số điện thoại: {ticket.phone}</p>
    <p>Loại vé: {ticket.type}</p>
    <p>Số lượng: {ticket.quantity} vé</p>
    <p>Số tiền phải trả: {ticket.price} vnđ</p>
    <p>Tình trạng: {ticket.status}</p>
    <Button onClick={props.onClick}>Check in</Button>
  </div>
}
function CreateTicket(props) {
  return <div>
    <Form>
      <Form.Label>Số điện thoại{star}</Form.Label>
      <Form.Control placeholder='vd. 0987654321'/>
      <Form.Label>Tên khách hàng</Form.Label>
      <Form.Control placeholder='vd. Nguyễn Văn A'/>
      <Form.Label>Loại vé{star}</Form.Label>
      <Form.Control as='select'>
        <option>Chọn loại vé</option>
        <option>Vé ngày (không giới hạn thời gian trong ngày)</option>
        <option>Vé lượt (thời gian chơi 2 giờ)</option>
        <option>Đăng ký thành viên VIP</option>
      </Form.Control>
      <Form.Label>Số lượng{star}</Form.Label>
      <Form.Control type='number'defaultValue='1' min='1'/>
      <Form.Label>Mã giảm giá</Form.Label>
      <Form.Control placeholder="vd. 2021DDD"/>
      <hr/>
      <p>Giá tiền: 100000 vnđ</p>
      <Button onClick={props.onClick}>Xác nhận</Button>
    </Form>
  </div>
}
function AccordionTicket(props) {
  if (props.listTicket.length == 0) {
    return <p> Không tìm thấy vé!</p>
  }
  else return <Accordion defaultActiveKey={0}>
    {props.listTicket.map((ticket, index) => {
      return <Card>
        <Accordion.Toggle as={Card.Header} eventKey={index}>{ticket.phone}<Badge variant='success'>{ticket.status}</Badge></Accordion.Toggle>
        <Accordion.Collapse as={Card.Body} eventKey={index}><Ticket ticket={ticket}/></Accordion.Collapse>
      </Card>
    })}
  </Accordion>
}
function Reception() {
    const [listTicket, setListTicket] = useState([]);
     
    return <div className='container'>
      <Tabs fill defaultActiveKey='tìm vé'>
        <Tab eventKey='tìm vé' title='Tìm vé chờ' className='tab'>
          <SearchBar onClick={() => {setListTicket(getTicketList())}}/>
          <hr/>
          <div className=''>
            <AccordionTicket listTicket={listTicket}/>
          </div>
        </Tab>
        <Tab eventKey='tạo vé' title='Tạo vé mới' className='tab'><CreateTicket/></Tab>
      </Tabs>
    </div>
  }
export default Reception