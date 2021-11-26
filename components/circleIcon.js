import * as React from 'react';

const CircleIcon = ({
  className = '',
  height = '60',
  width = '60',
  children,
  background = 'white',
}) => {
  return (
    <div
      style={{
        height: `${height}px`,
        width: `${width}px`,
        background,
      }}
      className={`circle d-flex justify-content-center align-items-center primary-text ${className}`}
    >
      {children}
    </div>
  );
};

export default CircleIcon;
