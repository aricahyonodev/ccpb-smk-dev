import React from 'react'

const InputText = ({ placeholder, className }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full py-2 border-b-[1px] outline-none border-neutral-300 bg-transparent ${className}`}
    />
  );
};

export default InputText