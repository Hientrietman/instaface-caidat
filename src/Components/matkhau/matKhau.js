import React, { Component } from 'react';
import './matKhau.css'
import InputPass from '../InputPass/InputPass';
function MatKhauVaBaoMat() {
    return ( 
        <div className='matKhau-container'>
            <p className='matKhau-text'>Mật khẩu và bảo mật</p>
            <InputPass title="Mật khẩu hiện tại" placeholder='abc@123' width={450} height={35} backgroundColor="#D3D3D3" margin='0px 0px 15px 0px'></InputPass>
            <InputPass title="Mật khẩu mới" placeholder='123@abc' width={450} height={35} backgroundColor="#D3D3D3" margin='0px 0px 15px 0px'></InputPass>
            <InputPass title="Nhập lại mật khẩu mới" placeholder='123@abc' width={450} height={35} backgroundColor="#D3D3D3" margin='0px 0px 15px 0px'></InputPass>
           
            <button className='matkhau-btn-capnhat btn'>Cập nhật</button>
        </div>
     );
}

export default MatKhauVaBaoMat;