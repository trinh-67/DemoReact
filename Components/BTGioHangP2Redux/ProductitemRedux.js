import React, { Component } from 'react'
//Kết nối thư viện kết nối redux
import {connect} from 'react-redux'

 class ProductitemRedux extends Component {
    render() {
        let {product} = this.props;
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={product.hinhAnh} alt ="" style={{width:320,height: 350}} />
                    <div className="card-body">
                        <h4 className="card-title">{product.tenSP}</h4>
                        <p className="card-text">{product.giaBan.toLocaleString()}</p>
                        <button className="btn btn-success" onClick={()=>{
                            this.props.themGioHang(product)
                        }}>Thêm sản phẩm</button>
                    </div>
                </div>

            </div>
        )
    }
}

//Hàm gửi dữ liệu lên store
const mapDispatchToProps= (dispatch) => {
    return {
        themGioHang: (sanPham) => {
            const spGioHang = {...sanPham,soLuong: 1,}
            //Tạo ra action
            const action = {
                type: 'THEM_GIO_HANG',//Thuộc tính bắt buộc của action
                spGioHang
            }
            //Dùng hàm dispatch từ redux => gửi dữ liệu lên reducer
            dispatch(action);
            
        }
    }
}

export default connect(null,mapDispatchToProps)(ProductitemRedux)
