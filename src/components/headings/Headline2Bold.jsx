import React from 'react'

const Headline2Bold = ({children, className}) => {
  return <h2 className={`font-semibold text-[30px] ${className}`}>{children}</h2>;
}

export default Headline2Bold