import React, { Component } from 'react'

export default class Register extends Component {

    state = {
        values: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDienThoai: '',
            hoTen: ''
        },
        errors: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDienThoai: '',
            hoTen: ''
        }


    }

    handleChange = (event) => {
        const { value, name } = event.target;
        //Xử lý lấy dữ liệu trên value
        let newValues = { ...this.state.values };

        newValues[name] = value;
        //Xử lý lấy dữ liệu trên erros
        let newErrors = { ...this.state.errors };
        let errors = '';

        if (value === '') {
            errors = name + ' không được bỏ trống !'
        }

        newErrors[name] = errors;

        this.setState({
            values: newValues,
            errors: newErrors
        })

        // this.setState({
        //     [name]: value
        // }, () => {
        //     console.log(this.state)
        // })

    }

    handleSubmit = (event) => {
        //Chặn sự kiện reload của browser
        event.preventDefault();
        let valid = true;
        //Lỗi khi valid không hợp lệ 
        // + Khi bất kì thuộc tính nào của errors != '' => bị lỗi
        for(let keyError in this.state.errors) {
            if(this.state.errors[keyError] !== '') {
                valid = false;
            }
        }

        // Hoặc + Bất kì thuộc tính nào của value = ''
        for(let keyValue in this.state.values) {
            if(this.state.values[keyValue] === '') {
                valid = false;
            }
        }

        if(!valid)
        {
            alert('Dữ liệu không hợp lệ');
            return ;
        }

    }

    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <div className="display-4">Đăng ký</div>
                <div className="form-group">
                    <p>Tài khoản</p>
                    <input name="taiKhoan" className="form-control" onChange={this.handleChange} />
                    <p className="text-danger">{this.state.errors.taiKhoan}</p>
                </div>
                <div className="form-group">
                    <p>Họ tên</p>
                    <input name="hoTen" className="form-control" onChange={this.handleChange} />
                    <p className="text-danger">{this.state.errors.hoTen}</p>

                </div>
                <div className="form-group">
                    <p>Mật khẩu</p>
                    <input name="matKhau" className="form-control" onChange={this.handleChange} />
                    <p className="text-danger">{this.state.errors.matKhau}</p>

                </div>
                <div className="form-group">
                    <p>Email</p>
                    <input name="email" className="form-control" onChange={this.handleChange} />
                    <p className="text-danger">{this.state.errors.email}</p>

                </div>
                <div className="form-group">
                    <p>Số điện thoại</p>
                    <input name="soDienThoai" className="form-control" onChange={this.handleChange} />
                    <p className="text-danger">{this.state.errors.soDienThoai}</p>

                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Đăng ký</button>
                </div>
            </form>
        )
    }
}
