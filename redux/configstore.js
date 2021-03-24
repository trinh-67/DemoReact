import {applyMiddleware, combineReducers,createStore} from 'redux';
import { PhimReducer } from './reducers/PhimReducer';
import reduxThunk from 'redux-thunk'
import { LoadingReducer } from './reducers/LoadingReducer';
import FaKeBookReducer from './reducers/FaKeBookReducer';
import {GHReducer} from './reducers/GHReducer';
import {QuanLySinhVienReducer} from './reducers/QuanLySinhVienReducer';
import BTGioHangReducer from './reducers/BTGioHangReducer';
import {BTXucXacreducer} from './reducers/BTXucXacreducer'


//state tổng của ứng dụng
const rootReducer = combineReducers({
    PhimReducer:PhimReducer,
    LoadingReducer:LoadingReducer,
    FaKeBookReducer,
    GHReducer,
    QuanLySinhVienReducer,
    BTGioHangReducer,
    BTXucXacreducer
});

//apply thunk để xử lý dispatch api
export const store = createStore(rootReducer,applyMiddleware(reduxThunk));

