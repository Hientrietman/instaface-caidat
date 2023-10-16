import React, { useState } from 'react';
import './thongbao.css'
function ThongBao() {
  const [notification1, setNotification1] = useState(true);
  const [notification2, setNotification2] = useState(false);

  const handleNotificationChange = (notificationNumber) => {
    if (notificationNumber === 1) {
      setNotification1(!notification1);
      setNotification2(false);
    } else if (notificationNumber === 2) {
      setNotification1(false);
      setNotification2(!notification2);
    }
  }

  return (
    <div className='thongbao-container'>
        <p className='thongbao-text'>Thông Báo</p>
        <p className='thongbao-text2'>Hiển thị thông báo</p>
        <div className='thongbao-icon-container'>
      <div className='thongbao-bat'>
      <svg width="220" height="169" viewBox="0 0 220 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.661621 0H219.301V169H0.661621V0Z" fill="white" fill-opacity="0.01"/>
        <path d="M37.1021 28.1665H182.862V98.5832H37.1021V28.1665Z" fill="#D7D7D7" stroke="#0099FF" stroke-width="4.38417" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M37.1023 98.5835L18.8823 144.354H201.082L182.862 98.5835" stroke="#0099FF" stroke-width="4.38417" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M91.3049 123.229H128.656L137.31 144.354H82.6504L91.3049 123.229Z" fill="#5F6670" stroke="#0099FF" stroke-width="4.38417" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
        <label className='thongbao-label'>
          <input
            type="radio"
            name="notification"
            checked={notification1}
            onChange={() => handleNotificationChange(1)}
          />
          Bật
        </label > 
      </div>
      <div className='thongbao-tat'>
        <svg width="220" height="169" viewBox="0 0 220 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.661621 0H219.301V169H0.661621V0Z" fill="white" fill-opacity="0.01"/>
        <path d="M37.1021 28.1665H182.862V98.5832H37.1021V28.1665Z" fill="#D7D7D7" stroke="black" stroke-width="4.38417" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M37.1023 98.5835L18.8823 144.354H201.082L182.862 98.5835" stroke="black" stroke-width="4.38417" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M91.3049 123.229H128.656L137.31 144.354H82.6504L91.3049 123.229Z" fill="#5F6670" stroke="black" stroke-width="4.38417" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <label className='thongbao-label'>
          <input
            type="radio"
            name="notification"
            checked={notification2}
            onChange={() => handleNotificationChange(2)}
          />
          Tắt
        </label>
      </div>

        </div>
    </div>
  );
}

export default ThongBao;
