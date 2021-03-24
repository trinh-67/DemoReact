import React, { Component } from 'react';
import {connect} from 'react-redux'

class FormSinhVien extends Component {

    state = {
        values: {
            maSV:'',
            hoTen:'',
            email:'',
            soDienThoai:''
        },
        errors: {
            maSV:'',
            hoTen:'',
            email:'',
            soDienThoai:'' 
        },
        valid: false
       
    }
    handleChange = (e) => {
        //Lấy giá trị mỗi lần value input thay đổi bởi người dùng
        let tagInput = e.target;
        let {name,value,type,pattern} = tagInput;

        let errorMessage = '';
        
        //Kiểm tra rổng
        if(value.trim() === ''){//Kiểm tra bất kì control input nào người dùng nhập vào đều kiểm tra rổng
            errorMessage = name + ' không được bỏ trống!'
        }


        //Kiểm tra email
        if(type === 'email'){
            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regex.test(value)){
                errorMessage = name + ' Không đúng định dạng!'
            }
        }

        //Kiểm tra số điện thoại
        if (name === 'soDienThoai'){
            const regex = new RegExp(pattern);
            if (!regex.test(value)){
                errorMessage = name + ' Không đúng định dạng!'
            }
        }


        let values = {...this.state.values,[name]:value}; //Cập nhật giá trị value cho state
        let errors = {...this.state.errors,[name]:errorMessage}; //Cập nhật lỗi cho state
        this.setState({
            ...this.state,
            values:values,
            errors:errors
        },() => {
            console.log(this.state);
            this.checkValid();
        })

        // this.setState({
        //     [name]:value
        // },() => {
        //     console.log(this.state);
        // })
    }

    handleSubmit = (e) => {
        e.preventDefault(); //Cản sự kiện submit reload trang của browser
        this.props.themSinhvien(this.state.values);
    }

    checkValid = () => {
        let valid = true;
        for(let key in this.state.errors){
            if(this.state.errors[key] !== '' || this.state.values[key] === ''){
                valid = false;
            }
        }
        this.setState({
            ...this.state,
            valid:valid
        })
    }
    render() {
        return (
            <div className="container">
                <div className="card text-left">
                    <div className="card-header bg-dark text-white"><h3>Thông tin sinh viên</h3></div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Mã SV</span>
                                    <input className="form-control" name="maSV" value={this.state.values.maSV} onChange={this.handleChange} />
                                    <p className="text-danger">
                                        {this.state.errors.maSV}
                                    </p>
                                </div>
                                <div className="form-group col-6">
                                    <span>Họ tên</span>
                                    <input className="form-control" name="hoTen" value={this.state.values.hoTen} onChange={this.handleChange} />
                                    <p className="text-danger">
                                        {this.state.errors.hoTen}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Email</span>
                                    <input type="email" className="form-control" name="email" value={this.state.values.email} onChange={this.handleChange} />
                                    <p className="text-danger">
                                        {this.state.errors.email}
                                    </p>
                                </div>
                                <div className="form-group col-6">
                                    <span>Số điện thoại</span>
                                    <input type="text" className="form-control" pattern ='^(0|[1-9][0-9]*)$' name="soDienThoai" value={this.state.values.soDienThoai} onChange={this.handleChange} />
                                    <p className="text-danger">
                                        {this.state.errors.soDienThoai}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-right">
                                    {/* <button  type="submit" className="btn btn-success">Thêm sinh viên</button> */}
                                    {this.state.valid ? <button className="btn btn-success" type="submit">Thêm sinh viên</button> : <button className="btn btn-success" type="submit" disabled>Thêm sinh viên</button>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch)=>{
    return {
        themSinhvien: (sinhVien) => {
            const action = {
                type: 'THEM_SINH_VIEN',
                sinhVien
            }
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(FormSinhVien)
