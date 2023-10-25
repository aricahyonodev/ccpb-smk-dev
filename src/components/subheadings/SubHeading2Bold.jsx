import React from 'react'

const SubHeading2Bold = ({ children, className }) => {
  return <p className={`text-[20px] font-semibold ${className}`}>{children}</p>;
};

export default SubHeading2Bold;