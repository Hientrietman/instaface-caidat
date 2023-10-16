import React from 'react';
import './InputText.css'
const InputText = ({ label, placeholderText, width, height, margin, backgroundColor }) => {
  const inputStyle = {
    width: width,
    height: height,
    margin: margin,
    backgroundColor: backgroundColor,
  };

  return (
    <div className='Textbox-container'>
      <label className='label-text'>{label}</label>
      <input className='info-text' type="text" placeholder={placeholderText} style={inputStyle} />
    </div>
  );
}

export default InputText;
