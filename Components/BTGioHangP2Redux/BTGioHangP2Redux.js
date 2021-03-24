import React, { Component } from 'react'
import BTGioHangRedux from './BTGioHangRedux'
import ProductListRedux from './ProductListRedux';

import {connect} from 'react-redux'

class BTGioHangP2Redux extends Component {

    renderSoLuong = () => {
        return this.props.gioHang.reduce((tongSoLuong,spGH,index) => {
            return tongSoLuong += spGH.soLuong;
        },0).toLocaleString();
    }
    render() {
        return (
            <div className="container">
                <h3>Danh sách sản phẩm</h3>
                <div className="text-right">
                    <span style={{width:17,cursor:'pointer'}} data-toggle="modal" data-target="#modelId">
                        <i className="fa fa-cart mr-5"></i>({this.renderSoLuong()})Giỏ Hàng
                    </span>
                </div>
                <ProductListRedux />

                <BTGioHangRedux/>
            </div>
        )
    }
}


//Viết hàm lấy giá trị  state từ redux store về biến thành props component
const mapStateToProps = (state) => {
    return {
        gioHang: state.BTGioHangReducer.gioHang
    }
}
export default connect(mapStateToProps)(BTGioHangP2Redux)
