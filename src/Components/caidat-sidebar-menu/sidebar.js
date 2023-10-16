import React from 'react';
import { Routes, Route, Link} from 'react-router-dom'
import './sidebar.css'
import tongquan from'../../images/tongquan.svg'
import chinhsua from'../../images/chinhsua.svg'
import matkhau from'../../images/matkhau.svg'
import phuongthuc from'../../images/phuongthucdangnhap.svg'
import thongbao from'../../images/thongbao.svg'
import Logo from '../../images/InstaFace logo.svg'
import ImageLayout from './imagelayout/imagelayout';



function Sidebar() {
    return (
        <div>
            
            <div className="sidebar">
                <div className='sidebar-top'>
                    <div className="sidebar-logo-name">
                        <img  className='sidebar-logo' src={Logo}></img>
                        <div className='sidebar-name'>InstaFace</div>
                    </div>
                    <Link to='/tongquantaikhoan'> <ImageLayout src={tongquan} text="Tổng quan tài khoản"></ImageLayout></Link>
                    <Link to='/chinhsua'> <ImageLayout src={chinhsua} text="Chỉnh sửa hồ sơ"></ImageLayout></Link>
                    <Link to='/phuongthuc'> <ImageLayout src={phuongthuc} text="Phương thức đăng nhập"></ImageLayout></Link>
                    <Link to='/matkhau'> <ImageLayout src={matkhau} text="Mật khẩu và bảo mật"></ImageLayout></Link>
                    <Link to='/thongbao'> <ImageLayout src={thongbao} text="Thông báo"></ImageLayout></Link>
                  
                </div>
               
                <div className='sidebar-bottom'>
                    <Link href="#page1">Giới thiệu</Link>
                    <Link href="#page2">Hỗ trợ và báo cáo</Link>
                    <Link href="#page3">Góp ý kiến</Link>
                </div>
               
                
            </div>

           
           
        </div>
    );
}

export default Sidebar;
