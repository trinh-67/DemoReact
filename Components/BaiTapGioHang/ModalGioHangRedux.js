import React, { Component } from 'react'

//ket noi redux ( connect ham ket noi reactComponnet - reduxStore )
import {connect} from 'react-redux'

 class ModalGioHangRedux extends Component {

    renderGioHang = () => {
         //this.props.gioHang la thuoc tinh nhan tu redux
        return this.props.gioHang.map((spGH,index) => {
            return (
                <tr key={index}>
                    <td>{spGH.maSP}</td>
                    <td>{spGH.tenSP}</td>
                    <td><img src={spGH.hinhAnh} width={75} height={125} /></td>
                    <td>{spGH.giaBan}</td>
                    <td><button onClick={()=>{
                        this.props.tangGiamSoLuong(index,true)
                    }}>+</button>{spGH.soLuong}<button onClick={()=>{
                        this.props.tangGiamSoLuong(index,false)
                    }}>-</button></td>
                    <td>{spGH.soLuong * spGH.giaBan}</td>
                    <td><button onClick={()  => {
                        this.props.xoaGioHangIndex(index)
                    }} className="btn-danger">Xóa</button></td>
                </tr>
            )
        })
    }
    render() {
       
        // console.log(this.props.gioHang);
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sp</th>
                            <th>Tên sp</th>
                            <th>Hình ảnh</th>
                            <th>Giá bán</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                    <tfoot>
                       <tr>
                            <td colSpan="5"></td>
                                <td>Tổng tiền</td>
                                <td>{this.props.gioHang.reduce((tongTien,spGioHang,index)=>{
                                    return tongTien += spGioHang.soLuong * spGioHang.giaBan;
                                },0)}</td>
                       </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {//state: là store tổng, => truy xuất đến GioHangReducer => biến state trên GioHangReducer
    return{
        gioHang: state.GHReducer.gioHang //Tạo ra 1 props của component ModalGioHangRedux

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHangIndex: (index) => {
            const action = {
                type: 'XOA_GIO_HANG',
                index
            }
            console.log(action);
            //Đưa action lên reducer
            dispatch(action);
        },
        tangGiamSoLuong: (index,tangGiam) => {
            const action = {
                type: 'TANG_GIAM_SL',
                index,
                tangGiam
            }
            //Đưa action lên reducer
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux);
