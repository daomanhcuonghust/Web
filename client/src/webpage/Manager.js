import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/footer/footer'
import AdminSidebar from '../components/staff/adminSidebar/adminSidebar'
import Xemdoanhthu from '../components/staff/xemdoanhthu/xemdoanhthu'
import AddEvent from '../components/staff/eventManage/addEvent.component'
import StaffManage from '../components/staff/staffManage/staffManage'
import AddStaff from '../components/staff/staffManage/addStaff'
import ChangeStaff from '../components/staff/staffManage/changeStaff'
import ChangeEvent from '../components/staff/eventManage/changeEvent'
import EventManage from '../components/staff/eventManage/eventManage'
import './manager.css'

export default function Manager() {
    return (
        <>
        <div className='mana'>
            <AdminSidebar/>
            <Routes>
                <Route exact path="/xemdoanhthu" element={<Xemdoanhthu/>}></Route>
                <Route exact path="/quanlynv" element={<StaffManage/>}></Route>
                <Route exact path="/themnv" element={<AddStaff/>}></Route>
                <Route exact path="/suanv" element={<ChangeStaff/>}></Route>
                <Route exact path="/themsk" element={<AddEvent/>}></Route>
                <Route exact path="/suask" element={<ChangeEvent/>}></Route>
                <Route exact path="/quanlysk" element={<EventManage/>}></Route>
            </Routes>
        </div>
        <Footer/>
        </>
    )
}
