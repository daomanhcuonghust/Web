import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';



const AdminSidebar = () => {
        return (
          <div className='adminsb'>
          <ProSidebar>
            <SidebarHeader>
              <h4 style={{textAlign: "center"}} >Tinker Bell Garden</h4>
            </SidebarHeader>

            <SidebarContent>
              <Menu iconShape="square">
                <MenuItem >
                  Xem doanh thu 
                  <Link to="/manager/xemdoanhthu" />  
                </MenuItem>
                <SubMenu title="Quản lý khu vui chơi" >
                  <MenuItem>
                    Thông tin khu vui chơi
                    <Link to="/manager" ></Link>
                  </MenuItem>
                  <MenuItem>Component 2</MenuItem>
                </SubMenu>
                <SubMenu title="Quản lý sự kiện" >
                  <MenuItem>
                    Danh sách sự kiện 
                    <Link to="quanlysk" />
                  </MenuItem>
                  <MenuItem>
                    Thêm sự kiện
                    <Link to="themsk" />
                  </MenuItem>
                </SubMenu>
                <SubMenu title="Quản lý nhân viên" >
                  <MenuItem>
                    Danh sách nhân viên
                    <Link to="quanlynv" />
                  </MenuItem>
                  <MenuItem>
                    Thêm nhân viên
                    <Link to="themnv" />
                  </MenuItem>
                </SubMenu>
                <SubMenu title="Quản lý khách hàng" >
                  <MenuItem>Component 1</MenuItem>
                  <MenuItem>Component 2</MenuItem>
                </SubMenu>
              </Menu>
            </SidebarContent>

            <SidebarFooter>
              <Menu iconShape="square">
              <MenuItem>
                Đăng xuất
              </MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
          </div>
        );
    }


export default AdminSidebar;