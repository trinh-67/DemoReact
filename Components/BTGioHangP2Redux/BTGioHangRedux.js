import React, { Component } from 'react'

//Sử dụng thư viện connect để lấy dữ liệu  về 
import {connect} from 'react-redux'

 class BTGioHangRedux extends Component {
    render() {
        return (
       
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content" style={{minWidth:800}}>
                <div className="modal-header">
                    <h5 className="modal-title">Giỏ Hàng</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                   <table class="table">
                       <thead>
                           <tr>
                               <th>Mã sp</th>
                               <th>Hình ảnh</th>
                               <th>Tên sản phẩm</th>
                               <th>Giá</th>
                               <th>Số lượng</th>
                               <th>Thành tiền</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.props.gioHang.map((spgh,index) => {
                                   return <tr key={index}>
                                       <td>{spgh.maSP}</td>
                                       <td><img src={spgh.hinhAnh} alt={spgh.hinhAnh} width={50} height={50}/></td>
                                       <td>{spgh.tenSP}</td>
                                       <td>{spgh.giaBan}</td>
                                       <td>
                                            <button className="btn btn-primary" onClick={()=>{this.props.tangGiamSoLuong(spgh.maSP,true)}}>+</button>
                                                {spgh.soLuong}</td>
                                            <button className="btn btn-primary" onClick={() => {this.props.tangGiamSoLuong(spgh.maSP,false)}}>-</button>
                                       <td>
                                           {(spgh.soLuong * spgh.giaBan).toLocaleString()}
                                        </td>
                                       <td><button className="btn btn-danger" onClick={()=>{
                                           this.props.xoaGioHang(spgh.maSP)
                                       }}>Xóa</button></td>
                                   </tr>
                               })
                           }
                       </tbody>
                       <tfoot>
                           <tr>
                               <th colSpan={5}></th>
                               <th>Tổng tiền</th>
                               <th>{this.props.gioHang.reduce((tongTien,spGioHang,index) => {
                                   return tongTien += spGioHang.soLuong * spGioHang.giaBan;
                               },0).toLocaleString()}</th>
                            </tr>
                       </tfoot>
                   </table>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                </div>
                </div>
            </div>
        </div>

        )
    }
}


// Hàm lấy state redux biến đổi thành props của componnet
const mapStateToProps = (state) => {//state là stat tổng của ứng dụng chứa các state con (rootReducer)
    return {
        gioHang: state.BTGioHangReducer.gioHang
    }
}

//Hàm đưa dữ liệu lên reducer
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP) => {
            //Tạo action
            let action = {
                type: 'XOA_GIO_HANG',
                maSP
            };

            //Dùng phương thức dispatch redux cung cấp để đưa dữ liệu lên reducer
           dispatch(action)
        },
        tangGiamSoLuong : (maSP,tangGiam) => {//tangGiam = true => Xử lý tăng  - tangGiam = false => xử lý giảm
            //Tạo action để đưa dữ liệu lên reducer
            let action = {
                type: 'TANG_GIAM_SO_LUONG',//Thuộc tính bắt buộc điền vào
                maSP,
                tangGiam
            }

            //Đưa action lên reducer mỗi lần người dùng click vào
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BTGioHangRedux)
