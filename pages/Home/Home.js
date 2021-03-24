import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {layDanhSachPhimAction} from '../../redux/actions/PhimActions';
 class Home extends Component {
    //state danh sách phim
    // state = {
    //     arrFilms: []
    // }

    loadFilm = () => {
        
        this.props.dispatch(layDanhSachPhimAction())
    }
    renderFilms = () => {
        return this.props.mangPhim.map((film, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-left">
                    <img className="card-img-top" src={film.hinhAnh} alt={film.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{film.tenPhim}</h4>
                    </div>
                </div>
            </div>

        })
    }
    render() {
        return (
            <div className="container">
                Home
                <button onClick={() => {
                    this.loadFilm();
                }}>Lấy danh sách phim</button>
                <div className="text-center display-4">Danh sách phim</div>
                <div className="row">
                    {this.renderFilms()}
                </div>
            </div>
        )
    }
    //Hàm giống hàm render của react component kế thừa nên có
    componentDidMount(){
        //Các api muốn gọi sau khi giao diện render thì sẽ gọi trong hàm này
        this.loadFilm();

    }
}

const mapStateToProps = (state) => {
    return {
        mangPhim: state.PhimReducer.mangPhim
    }
}

export default connect(mapStateToProps) (Home);