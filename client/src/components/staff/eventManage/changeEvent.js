import axios from "axios";
import React, { useState,useEffect}  from "react";
import {Form, Col, Row, InputGroup, FormControl} from "react-bootstrap";
import { useParams } from "react-router-dom";


export default function ChangeEvent() {
    const [name, setName] = useState("");
    const [time_start, setTime_start] = useState("");
    const [time_end, setTime_end] = useState("");
    const [description, setDescription] = useState("");
    const [detail, setDetail] = useState("");
    const [discount, setDiscount] = useState(0);
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");

    let { idsk }=useParams();

    useEffect(() => {
        async function fetchev(){
          let datask=await axios.get(`http://localhost:5000/api/v1/event/${idsk}`);
          let data= datask.data.result;
          console.log(data);
          setName(data.name);
          setTime_start(data.time_start.substring(0,10));
          setTime_end(data.time_end.substring(0,10));
          setDescription(data.description);
          setDetail(data.detail);
          setDiscount(data.discount);
          setImage1(data.image[0]);
          setImage2(data.image[1]);
          setImage3(data.image[2]);
        }
        fetchev();
      }, []);

      const handleSubmit = async (e)=>{
        if(name&&time_start&&time_end&&description&&detail&&discount&&image1&&image2&&image3){
            try{
                let res=await axios.patch(`http://localhost:5000/api/v1/event/${idsk}`,
                    {
                        image:[
                            image1,
                            image2,
                            image3
                        ],
                        name,
                        time_start,
                        time_end,
                        description,
                        detail,
                        discount

                    })
                console.log(res);
                // if(res.data.success){
                //     alert("tao su kien thanh cong")
                // }else{
                //     alert("tao su kien that bai")
                // }
            }catch(err){
                alert("err")
            }
        }else{
            alert("thieu thong tin kia bro")
        }
      }

        return (
            <div className="db">

            
                <Form>
                    <h3>Chỉnh sửa sự kiện</h3>
                    <Form.Label>Tên sự kiện</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nhập tên sự kiện"
                        value={name}
                        onChange={e=>setName(e.target.value)}
                    />
                    <Form.Row>
                    <Col>
                        <Form.Label>Ngày bắt đầu</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            placeholder="Nhập ngày bắt đầu"
                            value={time_start}
                            onChange={e=>setTime_start(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Ngày kết thúc</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            placeholder="Nhập ngày kết thúc"
                            value={time_end}
                            onChange={e=>setTime_end(e.target.value)}
                        />
                    </Col>
                    <Col xs={3}>
                        <Form.Label>Giảm giá</Form.Label>
                        <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
                        <FormControl
                            required
                            type="number"
                            placeholder="Nhập % giảm giá"
                            value={discount}
                            onChange={e=>setDiscount(e.target.value)}
                        />
                        </InputGroup>
                    </Col>
                    
                </Form.Row>
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nhập mô tả"
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                    />
                    <Form.Label>Nội dung</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        required
                        type="text"
                        placeholder="Nhập nội dung"
                        value={detail}
                        onChange={e=>setDetail(e.target.value)}
                    />
                    <label>Chọn ảnh 1</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">URL</InputGroup.Text>
                        <FormControl
                        required
                        type="text"
                        placeholder="Nhập url ảnh 1"
                        value={image1}
                        onChange={e=>setImage1(e.target.value)}
                    />
                    
                    </InputGroup>
                    <label>Chọn ảnh 2</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">URL</InputGroup.Text>
                        <FormControl
                        required
                        type="text"
                        placeholder="Nhập url ảnh 2"
                        value={image2}
                        onChange={e=>setImage2(e.target.value)}
                    />
                    
                    </InputGroup>

                    <label>Chọn ảnh 3</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">URL</InputGroup.Text>
                        <FormControl
                        required
                        type="text"
                        placeholder="Nhập url ảnh 3"
                        value={image3}
                        onChange={e=>setImage3(e.target.value)}
                    />
                    
                    </InputGroup>
               
                <button onClick={(e)=>handleSubmit(e)} className="btn btn-dark btn-lg btn-block">Submit</button>
                </Form>
            

            </div>

        );
    
}