

const stateDefault = {
    mangPhim: []
}


export const PhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LAY_DANH_SACH_PHIM':{
            state.mangPhim = [...action.mangPhim];
            return {...state}
        }
        default: { 
            return { ...state } 
        }
    }
}