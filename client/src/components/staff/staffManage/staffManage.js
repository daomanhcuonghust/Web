import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory, { textFilter, numberFilter   } from 'react-bootstrap-table2-filter';


class StaffManage extends Component {
  state = {
    
    products: [
      {
        id: 'nv1',
        name: 'Elon',
        chucvu: 'nv quầy',
        luong: 5000000,
        tksdt: '0123456',
        mk: 'blabla'
      },
      {
        id: 'nv2',
        name: 'Elon',
        chucvu: 'nv quầy',
        luong: 6000000,
        tksdt: '0123456',
        mk: 'blabla'
      },
      {
        id: 'nv3',
        name: 'Elon',
        chucvu: 'nv quầy',
        luong: 7000000,
        tksdt: '0123456',
        mk: 'blabla'
      }
    ],
    columns: [{
      dataField: 'id',
      text: 'Product ID',
      filter: textFilter(),
      sort: true
    },
    {
      dataField: 'name',
      text: 'Tên nhân viên',
      filter: textFilter()
    }, {
      dataField: 'chucvu',
      text: 'Chức vụ',
      filter: textFilter()
    },
    {
      dataField: 'luong',
      text: 'Lương',
      filter: numberFilter()
    },
    {
      dataField: 'tksdt',
      text: 'Tài khoản',
      filter: textFilter()
    },
    {
      dataField: 'mk',
      text: 'Mật Khẩu',
      filter: textFilter()
    },
  ],
  selectRow : {
    mode: 'checkbox',
    clickToSelect: true
  }
  } 
  
  render() {
    return (
      <div className="container" style={{ marginTop: 50  }}>
        <button type="button" className="btn btn-success" style={{marginRight : "10px", marginBottom : "10px"}}>Thêm</button>
        <button type="button" className="btn btn-danger" style={{marginRight : "10px", marginBottom : "10px"}}>Xóa</button>

        <BootstrapTable 
        striped
        hover
        keyField='id' 
        data={ this.state.products } 
        columns={ this.state.columns } 
        cellEdit={ cellEditFactory({
          mode: 'click',
          blurToSave: true
        }) }
        filter={ filterFactory() }
        selectRow={ this.state.selectRow }
        />
      </div>
    );
  }
}

export default StaffManage;