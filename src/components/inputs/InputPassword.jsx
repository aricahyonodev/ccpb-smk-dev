import React from 'react'

const InputPassword = ({ placeholder, className }) => {
  return (
    <input
      type="password"
      placeholder={placeholder}
      className={`w-full py-2 border-b-[1px] outline-none border-neutral-300 bg-transparent ${className}`}
    />
  );
};

export default InputPassword