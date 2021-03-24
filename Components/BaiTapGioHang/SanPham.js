import React, { Component } from 'react';

//Kết nối với reducerGioHang
import {connect} from 'react-redux'

 class SanPham extends Component {
    render() {

        const {sanPham} = this.props;
        return (
           <div className="card text-left">
                <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} width={150} height={250}/>
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.giaBan}</p>
                    <button onClick={()=>{this.props.themGioHang(sanPham)}}>Thêm Giỏ Hàng</button>
                </div>
            </div>

        )
    }
}


//Xây dựng hàm tạo ra props là hàm xử lý sự kiện => đưa dữ liệu lên store

const mapDispatchToProps = (dispatch) => {
    return {
        //Tạo ra props  component (là function => đưa dữ liệu lên store);
        themGioHang: (spClick) => {
            const spGioHang = {
                ...spClick,
                soLuong:1
            }

            //Tạo action đưa dữ liệu lên reducer
            const action = {
                type: 'THEM_GIO_HANG',//bắt buộc đặt type
                spGioHang:spGioHang, //Nội dung gửi lên reducer
            }
            // console.log(action);
            //Dùng hàm dispatch đưa dữ liệu lên reducer
            dispatch(action);
        }
    }
}
export default connect(null,mapDispatchToProps)(SanPham);
