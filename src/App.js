import logo from './logo.svg';
import React, { PureComponent } from 'react';
import { Routes, Route, Link} from 'react-router-dom'
import hinh1 from './images/svg1.svg.png'
import './App.css';
import Sidebar from './Components/caidat-sidebar-menu/sidebar';
import CaiDatNavBar from './Components/caidat-navbar/caidatNavBar';
import Tongquantaikhoan from './Components/tongquantaikhoan/tongquantaikhoan';
import ChinhSua from './Components/chinhsua/chinhsua';
import MatKhauVaBaoMat from './Components/matkhau/matKhau';
import PhuongThuc from './Components/phuongthuc/phuongthuc';
import ThongBao from './Components/thongbao/thongbao';



function App() {
  return (
    <div className="App">
      
      <div className='caiDat-container'>
          <Sidebar></Sidebar>
          <CaiDatNavBar></CaiDatNavBar>
          <Routes>
                    <Route path='/tongquantaikhoan' element={<Tongquantaikhoan/>}></Route>
                    <Route path='/chinhsua' element={<ChinhSua/>}></Route>
                    <Route path='/phuongthuc' element={<PhuongThuc/>}></Route>
                    <Route path='/matkhau' element={<MatKhauVaBaoMat/>}></Route>
                    <Route path='/thongbao' element={<ThongBao/>}></Route>
          </Routes>
          
         <img className='hinh1'src={hinh1}></img>
      </div>
        
        
    </div>
  );
}

export default App;
