
import React, {  useState } from 'react';
import './Profile.css';
import image from './nobi.jpg'
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const [info, setInfo] = useState({
        firstName: 'nobita',
        lastName: 'kirama',
        phoneNumber: '0123456',
        email: '123@gmail',
        bonus: '100',
        VIPdate: '15/06/2001'
    });
    const [edit, setEdit] = useState(false);

    let navi=useNavigate();

    const handleUpdate=()=>{
        //callapi
        setEdit(false);
    }
    
    const logout = ()=>{
        localStorage.removeItem("isLogin");
        navi("/user/home");
    }
    
    return (
        <div className='prof_ctn'>
            <div className="info_ticket">
                <div className='info'>
                    <h3>Thông tin tài khoản</h3>
                    <div className="img">
                        <img src={image} alt=""/>                    
                    </div>
                    <div className='line'>
                    <div className='label'>
                        <p>Họ</p>
                    </div>
                    <input value={info.firstName} onChange={e=>{setInfo({...info,firstName: e.target.value});setEdit(true)}}/>
                    </div>
                    <div className='line'>
                    <div className='label'>
                        <p>Tên</p>
                    </div>
                    <input value={info.lastName} onChange={e=>{setInfo({...info,lastName: e.target.value});setEdit(true)}}/>
                    </div>
                    <div className='line'>
                    <div className='label'>
                        <p>Số điện thoại</p>
                    </div>
                    <input value={info.phoneNumber} onChange={e=>{setInfo({...info,phoneNumber: e.target.value});setEdit(true)}}/>
                    </div>
                    <div className='line'>
                    <div className='label'>
                        <p>Email</p>
                    </div>
                    <input value={info.email} onChange={e=>{setInfo({...info,email: e.target.value});setEdit(true)}}/>
                    </div>
                    <div className={`bt${edit?'':' hide'}`}>
                        <button type='submit' onClick={()=>handleUpdate()}>Cập nhật</button>
                    </div>
                    <div className='vip'>
                        <p>VIP: {info.VIPdate}</p>
                        <a href="/user/VIPregister">Gia hạn</a>
                    </div>
                </div>
                <div className='ticket'>
                    <h3>Vé đã đặt</h3>
                    <div className='all'>
                        <div className='one'>
                            <div className='inftk'>
                                <p>Loại vé: </p>
                                <p>Giá: </p>
                                <p>12/11/2001</p>
                            </div>
                            <div className='state'>
                                <p>State</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='logout'>
                <button onClick={()=>logout()}>Đăng xuất</button>
            </div>  
        </div>
    )
}
