import React, { Component } from 'react';
import './UserProfile.css';
import Swal from 'sweetalert2'

export default class UserProfile extends Component {

    state = {
        values: {
            firstName:'',
            lastName: '',
            userName:'',
            email:'',
            password:'',
            passwordConfirm: ''
        },
        errors:{
            firstName:'',
            lastName: '',
            userName:'',
            email:'',
            password:'',
            passwordConfirm: ''
        }
    }

    handleChangeValue = (event) => {
        let {name, value, type} = event.target;
        console.log(name,value);


        let newValue = {...this.state.values,[name]:value};
        let newErrors = {...this.state.errors};

        if(value.trim() === ''){
            newErrors[name] = name + ' is required ! '
        }else {
            newErrors[name] = '';
        }

        if(type === 'email'){
            const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(!regexEmail.test(value)){ //Nếu email không hợp lệ
                newErrors[name] = name + 'is valid !';
            }else {
                newErrors[name] = '';//Nếu email hợp lệ
            }
        }
        //regex email javacript

        if(name === 'passwordConfirm'){
            if(value === newValue['password']){
                newErrors[name] ='';
            }else {
                newErrors[name] = name + 'is invalid';
            }
        }

        this.setState({
            values: newValue,
            errors: newErrors,
        })

    }
    handleSubmit = (event) => {
        //Cản trình duyệt submit reload lại trang
        event.preventDefault();
        //Xét điều kiện khi submit
        let { values, errors } = this.state;
        //Biến xác định form hợp lệ
        let valid = true;
        let profileContent = '';
        let errorsContent = '';
        for (let key in values) {
            if (values[key] === '') {
                valid = false;
                errorsContent += `
                <p class="text-left"> <b class="text-danger">${key} is invalid!</b></p>`;
                valid = false;
            }

            profileContent += `
                <p class="text-left"> <b>${key}:</b> ${values[key]}</p>
            `
        }

        for (let key in errors) {
            if (errors[key] !== '') {
                errorsContent += `
                <p class="text-left"> <b class="text-danger">${key} is invalid!</b></p>`;
                valid = false;
            }


        }

        if (!valid) {

            Swal.fire({
                title: 'Your profile!',
                html: errorsContent,
                icon: 'error', //success, error, warning, question
                confirmButtonText: 'OK'
            })
            return;
        }

        // alert('Thành công!')
        Swal.fire({
            title: 'Your profile!',
            html: profileContent,
            icon: 'success', //success, error, warning, question
            confirmButtonText: 'OK'
        })
    }

    render() {
        return (
            <div style={{backgroundColor: '#eee',position:"relative",height:'100%',width:'100%'}}>
                <form onSubmit={this.handleSubmit} style={{width:600,margin:'0 auto', height:'100vh',}} className="pt-5">
                    <h1 className="text-center">User Profile</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="group">      
                                    <input values={this.state.values.firstName} type="text" name="firstName" onChange={this.handleChangeValue} />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>Firstname</label>
                                    <span className="text text-danger">{this.state.errors.firstName}</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="group">      
                                    <input values={this.state.values.lastName} type="text" name="lastName" onChange={this.handleChangeValue} />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>LastName</label>
                                    <span className="text text-danger">{this.state.errors.lastName}</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="group">      
                                    <input values={this.state.values.userName} type="text" name="userName" onChange={this.handleChangeValue} />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>Username</label>
                                    <span className="text text-danger">{this.state.errors.userName}</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="group">      
                                    <input value={this.state.values.email} type="email" name="email" onChange={this.handleChangeValue} />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>Email</label>
                                    <span className="text text-danger">{this.state.errors.email}</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="group">      
                                    <input value={this.state.values.password} name="password" type="password" onChange={this.handleChangeValue} />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>passWord</label>
                                    <span className="text text-danger">{this.state.errors.password}</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="group">      
                                    <input value={this.state.values.passwordConfirm} name="passwordConfirm" type="password" onChange={this.handleChangeValue}/>
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>passWordConfirm</label>
                                    <span className="text text-danger">{this.state.errors.passwordConfirm}</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button className="btn btn-success bg-dark text-white w-100" style={{fontSize:25}}>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}






