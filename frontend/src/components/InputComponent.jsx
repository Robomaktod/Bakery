import React from 'react';
import "../css/InputComponent.css"

const InputComponent = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputComponent;
