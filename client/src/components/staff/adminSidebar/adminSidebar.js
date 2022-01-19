import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';


const AdminSidebar = () => {
        return (
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
                  <MenuItem>Component 1</MenuItem>
                  <MenuItem>Component 2</MenuItem>
                </SubMenu>
                <SubMenu title="Quản lý sự kiện" >
                  <MenuItem>Component 1</MenuItem>
                  <MenuItem>Component 2</MenuItem>
                </SubMenu>
                <SubMenu title="Quản lý khách hàng" >
                  <MenuItem>Component 1</MenuItem>
                  <MenuItem>Component 2</MenuItem>
                </SubMenu>
                <SubMenu title="Quản lý nhân viên" >
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
               
        );
    }


export default AdminSidebar;