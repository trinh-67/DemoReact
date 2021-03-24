import React, { Component } from 'react'

import {connect} from 'react-redux';
class Loading extends Component {


    renderLoading = () => {
        if(this.props.isLoading) {
            return <div style={{position:'fixed',width:'100%',height:'100%',top:0,left:0,zIndex:10}}>
                
            <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,.5)'}}>
                <span className="display-4 text-white">Loading ...</span>
            </div>
        </div>
        } 
        return '';
    }

    render() {
        return (
            <div>
                {this.renderLoading()}
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        isLoading:state.LoadingReducer.loading
    }
}

export default connect (mapStateToProps)(Loading);