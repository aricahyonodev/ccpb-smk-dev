import React from 'react'

const ButtonExtraSmall = ({ children, className}) => {
  return (
    <button className={`font-medium bg-primary-500 text-neutral-100 rounded-lg py-[6px] px-[14px] ${className}`}>
      {children}
    </button>
  );
}

export default ButtonExtraSmall