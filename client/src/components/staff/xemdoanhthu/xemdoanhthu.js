import React ,{ useState} from 'react';
import { Table } from 'react-bootstrap';
import './Xemdoanhthu.css'

export default function Xemdoanhthu() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [curStartDate, setCurStartDate] = useState("");
    const [curEndDate, setCurEndDate] = useState("");
    const [dataDoanhThu, setDataDoanhThu] = useState([
        {
            id: 1,
            ten: "abc",
            sl: 10,
            tien: 3000
        },
        {
            id: 2,
            ten: "abc",
            sl: 10,
            tien: 3000
        },
        {
            id: 3,
            ten: "abc",
            sl: 10,
            tien: 3000
        }
    ])
    const [dataDetail, setDataDetail] = useState({
        data:{
        },
        user:[
            {
                usename: "phamthao",
                soluong: 1,
                tien: 200
            }
        ]
    })

    const [canSee, setCanSee] = useState(false);
    const [detail, setDetail] = useState(false);
    let total=0;
    const handleSubmit=()=>{
        if(startDate.length!==0&&endDate.length!==0){
            setCurStartDate(startDate);
            setCurEndDate(endDate);          
            setCanSee(true);
            //call api o day
        }
        else{        
            setCanSee(false);
            alert("chon du ngay");
        }
        
    }
    const handleDetail=(input)=>{
        setDetail(true);
        setDataDetail(prevState=>({
            ...prevState,
            data: input
        }));
    }
    return (
        <div className='xdt_ctn'>
            <div className='heading'>Thống kê doanh thu</div>
            <div className='inputdate'>
                <div className='input_ctn'>
                <div className='input'>
                    <label>Ngày bắt đầu: </label>
                    <input type={'date'} onChange={(e)=>setStartDate(e.target.value)}/>
                </div>
                <div className='input'>
                    <label>Ngày kết thúc: </label>
                    <input type={'date'} onChange={(e)=>setEndDate(e.target.value)}/>
                </div>
                </div>
                
                <div 
                    className='submit'
                    onClick={()=>handleSubmit()}
                >
                    <button>Xác nhận</button>
                </div>
            </div>
            <div className={`output${canSee?'':' hideoutput'}`} >
                <div className='head'>Thống kê từ ngày {curStartDate} đến {curEndDate} </div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Loại vé</th>
                            <th>Số lượng</th>
                            <th>Số tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            dataDoanhThu.map(data=>{
                                total+=data.tien;
                                return(
                                    <tr key={data.id}>
                                        <th>{data.ten}</th>
                                        <th>{data.sl}</th>
                                        <th>{data.tien}</th>
                                        <th onClick={()=>handleDetail(data)}>Xem chi tiết</th>
                                    </tr>
                                )
                                }
                            )
                        }
                    </tbody>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>{total}</th>
                        <th>Total</th>
                    </tr>
                </Table>
            </div>
            <div className={`detail${detail?'':' hidedetail'}`}>
                <span className="exit" onClick={()=>setDetail(false)}>X</span>
                <h3 className='namedetail'>{dataDetail.data.ten}</h3>
                <h4 className='timedetail'>Từ {curStartDate} đến {curEndDate}</h4>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>User name</th>
                            <th>Số lượng</th>
                            <th>Số tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataDetail.user.map((data,index)=>{
                                return(
                                    <tr key={index}>
                                        <th>{data.usename}</th>
                                        <th>{data.soluong}</th>
                                        <th>{data.tien}</th>
                                    </tr>
                                )
                                }
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}