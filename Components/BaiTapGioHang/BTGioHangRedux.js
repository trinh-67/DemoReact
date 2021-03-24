import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import ModalGioHangRedux from './ModalGioHangRedux'

export default class BTGioHangRedux extends Component {
    render() {
        return (
            <div className="container">
                {/* <h3 className="text-center">Gio Hang redux</h3> */}
                <ModalGioHangRedux/>
                <DanhSachSanPham/>
            </div>
        )
    }
}
