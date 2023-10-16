import React, { Component } from 'react';
import ImageLayout from '../caidat-sidebar-menu/imagelayout/imagelayout';
import fbIcon from '../../images/icon-facebook.svg'
import ggIcon from '../../images/gg-icon.svg'
import { Avatar } from '@mui/material';
import './phuongthuc.css'
function PhuongThuc() {
    return (  
        <div className='phuongthuc-container'>
            <p className='text'>Phương thức đăng nhập</p>
           <div className='phuongthuc-phuongthuc-container'>
                
                <div>
                    <p className='phuongthuc-text'>Phương thức đăng nhập có sẵn</p>
                    <div className='phuongthuc-info'> 
                        <img className='phuongthuc-avatar' src={fbIcon}></img>
                        <p>Facebook </p>
                        <button className='phuongthuc-xoa btn'>Xóa</button>
                    </div>
                    
                </div>

                <div>
                    <p className='phuongthuc-text'> Phương thức đăng nhập khác</p>
                    <div className='phuongthuc-info'>
                        <img className='phuongthuc-avatar' src={ggIcon}></img>
                        <p>Google</p>
                    </div>

                </div>
                
            </div>
        

        </div>
    );
}

export default PhuongThuc;