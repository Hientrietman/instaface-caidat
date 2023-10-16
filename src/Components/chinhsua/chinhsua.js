import { Avatar } from '@mui/material';
import React, { Component } from 'react';

import './chinhsua.css'
import InputText from '../InputText/InputText';
function ChinhSua() {
    return ( 
        <div className='chinhSua-container'>
            <div className='chinhSua-text'>
                Chỉnh sửa hồ sơ
            </div>
            <div className='anh-text'>
                Ảnh hồ sơ
            </div>
            <div className='avatar-container'>
                <Avatar className='caidat-avatar'></Avatar>
                <button className='btn-xoaanh btn'>xoá ảnh</button>
                <button className='btn-thaydoianh btn'>thay đổi ảnh</button>
            </div>
            <div className='caidat-info-container'>
                <InputText label="Tên hồ sơ" placeholderText='Văn Quý' width={465} height={35} backgroundColor="#D3D3D3"></InputText>
                <button className='btn-capnhat1 btn btn-capnhat'>Cập nhật</button>
            </div>
            <div className='caidat-info-container'>
                <InputText label="Địa chỉ" placeholderText='280 An Dương Vương' width={465} height={35} backgroundColor="#D3D3D3"></InputText>
                <button className='btn-capnhat2 btn btn-capnhat'>Cập nhật</button>
            </div>
        </div>
     );
}

export default ChinhSua;