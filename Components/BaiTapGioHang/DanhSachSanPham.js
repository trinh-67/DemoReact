import React, { Component } from 'react'
import data from '../../data/phoneData.json';
import SanPham from './SanPham';

export default class DanhSachSanPham extends Component {

    //Viết phương thức render sản phẩm
    renderSanPham = () => {
        return data.map((sanPham,index) => {
            return <div className="col-4" key={index}>
                <SanPham sanPham = {sanPham}/>
            </div>
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-danger text-center">Danh Sách snar phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
