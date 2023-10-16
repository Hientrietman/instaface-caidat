import { Avatar } from '@mui/material';
import './imagelayout.css';
import React from 'react';

function ImageLayout(props) {
    return (
        <div className='ImageLayout-container'>
            <div className='avatar'>
                <Avatar src={props.src} style={{ width: '32px', height: '32px' }} className='ImageLayout-avatar'></Avatar>
            </div>
            <div className='ImageLayout-text'>
                {props.text}
            </div>
        </div>
    );
}

export default ImageLayout;
