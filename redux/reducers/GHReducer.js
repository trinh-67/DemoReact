//Khoi tao gia tri ban dau cua store
const stateGioHang = {
    gioHang: [
        {maSP:1,tenSP:'Iphone',hinhAnh: './img/applephone.jpg',soLuong:1,giaBan:1000,thanhTien:1000}
    ]
}

export const GHReducer = (state = stateGioHang,action) => {
    console.log("reducer",action);
    switch(action.type){
        case 'THEM_GIO_HANG': {
            //Xử lý logic thêm giỏ hàng
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP ===action.spGioHang.maSP);
            if(index!== -1) {
                gioHangCapNhat[index].soLuong +=1;
            }else {
                gioHangCapNhat.push(action.spGioHang);
            }
            state.gioHang = gioHangCapNhat;
            return {...state}
        }
        case 'XOA_GIO_HANG': {
            let gioHangCN = [...state.gioHang];
            //xóa giỏ hàng dựa vào index
            gioHangCN.splice(action.index,1);
            //Gán giỏ hàng mới cho state.gioHang => render lại giao diện
            state.gioHang = gioHangCN;
            return{...state};
        }
        case 'TANG_GIAM_SL': {
            const {index, tangGiam} = action;
            console.log(action)
            //Xử lý tăng giảm số lượng
            let gioHangTG  = [...state.gioHang];
            if(tangGiam){
                gioHangTG[index].soLuong += 1;
            }else {
                if(gioHangTG[index].soLuong >1) {
                    gioHangTG[index].soLuong -= 1;
                }
            }
            //Cập nhật lại state của GioHangReducer
            state.gioHang = gioHangTG;
            return{...state}
        }
    }
    return {...state}
}
