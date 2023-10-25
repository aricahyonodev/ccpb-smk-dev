import React from 'react'

const ButtonMedium = ({ children, className}) => {
  return (
    <button className={`font-bold bg-primary-500 text-neutral-100 rounded-xl py-[16px] px-[176px] ${className}`}>
      {children}
    </button>
  );
}

export default ButtonMedium