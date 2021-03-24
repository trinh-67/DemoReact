import React, { Component } from 'react';

import {connect} from 'react-redux'

 class XucXac extends Component {

    renderXucXac = () => {
        //Lấy props từ reducer về
        return this.props.mangXucXac.map((xucxac,index) => {
            return (
                <img key={index} className="ml-2" style={{width:35,height:35}} src={xucxac.hinhAnh} alt={xucxac.hinhAnh}/>
            )
        })
    }
    render() {
        return (
            <div>
               {this.renderXucXac()}
            </div>
        )
    }
}

//Hàm lấy state từ redux về thành props của componennt
const mapStateToProps = (state) => {
    return {
        mangXucXac: state.BTXucXacreducer.mangXucXac
    }
}
export default connect(mapStateToProps)(XucXac)
