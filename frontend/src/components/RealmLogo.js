import React from 'react';
import './Logo.css'
const Logo = () => {
  // Replace 'logo.png' with your actual logo file and adjust the image path
  return (
    <div className="logo-container">
      <img src="/images/latest_realm.png" alt="Logo" style={{ width: '100px', height: 'auto' }} />
    </div>
  );
};

export default Logo;
