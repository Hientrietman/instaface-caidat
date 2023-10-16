import React from 'react';
import './tongquantaikhoan.css';
import InputText from '../InputText/InputText';



function Tongquantaikhoan() {
    return (
        <div className='tongquantaikhoan-container'>
            <div className='tongquantaikhoan-text'>Tổng quan tài khoản</div>
            <InputText label="Tên tài khoản" placeholderText='Tên tài khoản' width={1000} height={38} margin="0 0 20px 0" backgroundColor="#F0F0F0"></InputText>
            <div className='info-container'>
                <InputText label="Email" placeholderText='abc@gmail.com' width={465} height={35} backgroundColor="#D3D3D3"></InputText>
                <InputText label="Số điện thoại" placeholderText='0903626833' width={465} height={35} backgroundColor="#D3D3D3"></InputText>
                <InputText label="Giới tính" placeholderText='Nam' width={465} height={35} backgroundColor="#D3D3D3"> </InputText>
                <InputText label="Quốc gia" placeholderText='Việt Nam' width={465} height={35} backgroundColor="#D3D3D3"></InputText>
                <InputText label="Ngày sinh" placeholderText='23/03/2003' width={250} height={35} backgroundColor="#D3D3D3"></InputText>
            </div>
        </div>
    );
}

export default Tongquantaikhoan;
