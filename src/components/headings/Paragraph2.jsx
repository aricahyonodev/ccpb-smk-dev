import React from 'react'

const Paragraph2 = ({children, style}) => {
  return (
    <p className={`${style} text-p2`}>{children}</p>
  );
}

export default Paragraph2