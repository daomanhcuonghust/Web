import React ,{ useState} from 'react';
import { Table, Button } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
import {BsPen} from 'react-icons/bs'

export default function StaffManage(){
  const deleteRow=() =>{

  }
  const changeRow=() =>{

  }
  return(
    <div className='db'>
     
      <h3>Bảng quản lý nhân viên</h3>
      <Table striped bordered >
        <thead>
          <tr>
            <th>#</th>
            <th>Mã nhân viên</th>
            <th>Họ và tên</th>
            <th>Chức vụ</th>
            <th>Lương</th>
            <th>Tài khoản</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>nv1</td>
            <td>Otto</td>
            <td>Quản lý</td>
            <td>30.000.000</td>
            <td>admin123</td>
            <td className="text-center" >
              <Button variant="outline-secondary" style= {{ border: `none` }} onClick={()=>changeRow()} href="suanv">
                <BsPen/>
              </Button>
            </td>
            <td className="text-center" >
              
              <Button variant="outline-danger" style= {{ border: `none` }} onClick={()=>deleteRow()}>
                <AiOutlineDelete />
              </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>nv2</td>
            <td>Mark</td>
            <td>Nhân viên quầy</td>
            <td>5.000.000</td>
            <td>blabla</td>
            <td className="text-center" >
              <Button variant="outline-secondary" style= {{ border: `none` }} onClick={()=>changeRow()} href="suanv">
                <BsPen/>
              </Button>
            </td>
            <td className="text-center" >
              
              <Button variant="outline-danger" style= {{ border: `none` }} onClick={()=>deleteRow()}>
                <AiOutlineDelete />
              </Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>nv3</td>
            <td>Jeff</td>
            <td>Nhân viên lễ tân</td>
            <td>5.000.000</td>
            <td>usename123</td>
            <td className="text-center" >
              <Button variant="outline-secondary" style= {{ border: `none` }} onClick={()=>changeRow()} href="suanv">
                <BsPen/>
              </Button>
            </td>
            <td className="text-center" >
              
              <Button variant="outline-danger" style= {{ border: `none` }} onClick={()=>deleteRow()}>
                <AiOutlineDelete />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )

}