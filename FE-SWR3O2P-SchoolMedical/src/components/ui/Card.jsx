import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  title, 
  titleClassName = '',
  noPadding = false,
  ...props 
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md ${noPadding ? '' : 'p-6'} ${className}`}
      {...props}
    >
      {title && <h3 className={`text-xl font-semibold mb-4 ${titleClassName}`}>{title}</h3>}
      {children}
    </div>
  );
};

export default Card; 