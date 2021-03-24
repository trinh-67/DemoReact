const stateDefault = {
    mangSinhVien: [
        {maSV:1,hoTen:'Nguyễn văn a', soDienThoai:'0101010101',email:'abc@gmail.com'}
    ]
}

export const QuanLySinhVienReducer = (state = stateDefault,action) => {

    switch(action.type){
        case 'THEM_SINH_VIEN': {
            //Thêm dữ liệu sinh viên vào mangSinhVien
            const mangSVUpdate = [...state.mangSinhVien,action.sinhVien];
            state.mangSinhVien = mangSVUpdate;
            return {...state};
        };break;
    }
    return{...state}
}