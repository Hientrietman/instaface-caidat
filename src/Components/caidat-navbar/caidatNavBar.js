import React from 'react';
import Grid from '@mui/material/Grid';
import './caidatNavBar.css';
import tongquan from '../../images/tongquan.svg';
import { Avatar } from '@mui/material';

function CaiDatNavBar() {
  return (
    <div>
      <Grid container className='CaiDatNavBar-main'>
        <Grid item xs={6}>
          <div className='CaiDatNavBar-left-container'>
            <input className='CaiDatNavBar-searchbar' placeholder='Tìm kiếm cài đặt' type='text'></input>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className='CaiDatNavBar-right-container'>
            <Avatar src={tongquan}></Avatar>
            <div className='avatar-name'>Lê Văn Quý</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default CaiDatNavBar;
