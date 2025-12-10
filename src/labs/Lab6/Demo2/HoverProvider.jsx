import React, { useState } from 'react';



const HoverProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return <>{children({ isHovered, onMouseEnter, onMouseLeave })}</>;
};

export default HoverProvider;
