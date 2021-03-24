import axios from 'axios';



export const layDanhSachPhimAction = () => {
    return async (dispatch) => {

        //Gọi action loading open
        dispatch({
            type:'openLoading'
        })
        setTimeout(async ()=>{
            const result = await axios({
                url:'https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?maNhom=GP01',
                method:'GET'
            });
    
            //Sau khi lấy dữ liệu từ api về sử dụng hàm dispatch của redux thunk để đưa dữ liệu lên server
            dispatch({
                type:'LAY_DANH_SACH_PHIM',
                mangPhim:result.data
            })
    
            //Tắt loadings
            dispatch({
                type:'closeLoading'
            })
        },1000);

        
    }
}