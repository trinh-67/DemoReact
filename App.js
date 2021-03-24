import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './Components/Header/Header';
import Loading from './Components/Loading/Loading';
import Lifecycle from './pages/LifeCycle/Lifecycle';
import UseStateHook from './pages/Hooks/UseStateHook';
import BaiTapChonXe from './pages/Hooks/BaiTapChonXe';
import DemoReduxApp from './pages/Hooks/DemoReduxApp';
import BTGioHangRedux from './Components/BaiTapGioHang/BTGioHangRedux';
import UserProfile from './FormValidation/UserProfile/UserProfile';
import BaiTapForm from './FormValidation/BaiTapForm/BaiTapForm';
import BTGioHangP2Redux from './Components/BTGioHangP2Redux/BTGioHangP2Redux';
import BTGameRedux from './redux/BTGameRedux/BTGameRedux';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Loading />
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/lifecycle" render={(propsRoute) => { //tham số chứa các props của thẻ route  
              return <div>
                  <h3>Component lifecycle</h3>
                  <Lifecycle {...propsRoute} /> 
              </div>
          }} />
          <Route exact path="/baitapchonxe" component={BaiTapChonXe} />

          <Route exact path="/usestatedemo" component={UseStateHook} />
          <Route exact path="/reduxapp" component={DemoReduxApp} />
          <Route exact path="/btgiohang" component = {BTGioHangRedux} /> 
          <Route exact path="/formvalidation" component = {UserProfile} /> 
          <Route exact path="/formsinhvien" component = {BaiTapForm} /> 
          <Route exact path="/demogiohang" component={BTGioHangP2Redux} />
          <Route exact path="/gamexucxac" component={BTGameRedux}/>
          {/* Route mặc định để dưới cùng của úng dụng */}
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
