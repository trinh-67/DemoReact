import React, { Component } from 'react'
//Thẻ thay thế thẻ a trong routing của react router dom
import { NavLink } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/home">Demo</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName="bg-dark text-light" className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName="bg-dark text-light" className="nav-link" to="/btgiohang">Gio Hang redux</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName="bg-dark text-light" className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName="bg-dark text-light" className="nav-link" to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName="bg-dark text-light" className="nav-link" to="/lifecycle">Lifecycle</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hooks</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="/usestatedemo">UseState Hook</NavLink>
                                <NavLink className="dropdown-item" to="/reduxapp">Fake App</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Form Validation</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="/formvalidation">Form Validation rcc</NavLink>
                                <NavLink className="dropdown-item" to="/formsinhvien">Form Sinh Viên</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown">Giỏ Hàng redux</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="/btgiohang">Gio Hang redux</NavLink>
                                <NavLink className="dropdown-item" to="/demogiohang">Giỏ hàng redux P2</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown">Game</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="/gamexucxac">Game xú xắc redux</NavLink>
                            </div>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        )
    }
}


