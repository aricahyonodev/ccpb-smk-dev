import React from 'react'

const ButtonSmall = ({ children, className}) => {
  return (
    <button className={`font-bold bg-primary-500 text-neutral-100 rounded-lg py-[10px] px-[30px] ${className}`}>
      {children}
    </button>
  );
}

export default ButtonSmall