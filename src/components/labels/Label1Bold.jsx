import React from 'react'

const Label1Bold = ({children, className}) => {
  return <p className={`text-[14px] font-semibold ${className}`}>{children}</p>;
}

export default Label1Bold