import React, { useState } from 'react'

export default function BaiTapChonXe(props) {
    const [imgSrc,setImgSrc] = useState('./img/car/products/black-car.jpg');
    const changeColor = (color) =>{
        setImgSrc(`./img/car/products/${color}-car.jpg`)
    }
    return (
        <div className="container">
            <h3>Bài tập chọn xe</h3>
            <div className="row">
                <div className="col-6">
                    <img src={imgSrc} style={{width:'100%'}} />
                </div>
                <div className="col-6">
                    <button style={{color:'red'}} onClick={()=>{
                        changeColor('red');
                    }} >Red color</button> <br />
                    <button style={{color:'black'}} onClick={()=>{
                        changeColor('black');
                    }}>Black color</button> <br />

                </div>
            </div>
        </div>
    )
}
