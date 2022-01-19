import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/footer/footer'
import AdminSidebar from '../components/staff/adminSidebar/adminSidebar'
import Xemdoanhthu from '../components/staff/xemdoanhthu/xemdoanhthu'
import './manager.css'

export default function Manager() {
    return (
        <>
        <div className='mana'>
            <AdminSidebar/>
            <Routes>
                <Route exact path="/xemdoanhthu" element={<Xemdoanhthu/>}></Route>
            </Routes>
        </div>
        <Footer/>
        </>
    )
}
