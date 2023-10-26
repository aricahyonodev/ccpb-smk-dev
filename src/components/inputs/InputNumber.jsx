import React from 'react'

const InputNumber = ({ placeholder, className }) => {
  return (
    <input
      type="number"
      placeholder={placeholder}
      className={`w-full py-2 border-b-[1px] outline-none border-neutral-300 bg-transparent ${className}`}
    />
  );
};

export default InputNumber;