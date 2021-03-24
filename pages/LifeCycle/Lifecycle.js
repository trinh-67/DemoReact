import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class Lifecycle extends Component {
    // state = {}
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            stateNumber: {
                number: 1
            }
        }
        console.log('contructor');
    }
 

    static getDerivedStateFromProps(newProps,currentState){
        console.log('getDedriveStateFromProps');
        return currentState;
    }
    //Chạy sau khi state hoặc props của component thay đổi và trước render 
    shouldComponentUpdate(newProps,newState) {
        //Xử lý => return false giao diện không render lại, return true giao diện render lại (default)
        return true; 
    }

    render() {
        console.log('render');
        return (
            <div className="container">
                Lifecycle
                <h1>{this.state.stateNumber.number}</h1>
                <button onClick={()=> {
                    // this.setState({
                    //     number:this.state.number + 1
                    // })

                    let newStateNumber = {...this.state.stateNumber};
                    newStateNumber.number += 1;
                    this.setState({
                        stateNumber: newStateNumber
                    })

                }}>click</button>

               {this.state.stateNumber.number <3 ?  <ChildComponent stateNumber={this.state.stateNumber}  /> : '' }
            </div>
        )
    }

    //Lifecycle dùng để gọi api
    componentDidMount(){ //Chạy 1 lần sau lần render đầu tiên
        console.log('componentDidMount');
    }


    //componentDidupdate chạy kể từ lần thay đổi props hoặc state 
    componentDidUpdate(prevProps,prevState) { //Chạy mỗi lần setState hoặc props

        //Hạn chế setState trong component này (Muốn setState phải có điều kiện if)
        console.log('componentDidUpdate');


    }
}
