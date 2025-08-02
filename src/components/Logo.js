import React from 'react';

const Logo = ({ className = "h-8" }) => {
  return (
    <div className={`flex flex-col justify-center ${className}`}>
      <div className="flex items-center leading-none">
        <span className="text-3xl font-extrabold text-indigo-600 tracking-tight">G</span>
        <span className="text-3xl font-extrabold text-gray-800 tracking-tight">ATHA</span>
      </div>
      <div className="text-sm font-bold text-gray-600 tracking-wider uppercase">INFOTECH</div>
    </div>
  );
};

export default Logo; 