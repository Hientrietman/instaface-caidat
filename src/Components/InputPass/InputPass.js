import React, { useState } from 'react';
import hide from '../../images/hide.png';
import './InputPass.css';

const InputPassword = ({ title, width, height, backgroundColor, margin, placeholder }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ margin }}>
      <label className='inputpass-label-text'>{title}</label>
      <div className="password-input" style={{ width }}>
        <input className='input'
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          placeholder={placeholder} 
          style={{ width, height, backgroundColor: backgroundColor }}
        />
        <span
          className="password-toggle"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <img className='input-show-hide' src={hide} alt="Ẩn mật khẩu" />
          ) : (
            <img className='input-show-hide' src={hide} alt="Hiện mật khẩu" />
          )}
        </span>
      </div>
    </div>
  );
};

export default InputPassword;
