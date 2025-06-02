import React from 'react';

const variants = {
  primary: 'bg-primary hover:bg-blue-800 text-white',
  secondary: 'bg-secondary hover:bg-blue-500 text-white',
  accent: 'bg-accent hover:bg-blue-400 text-white',
  outline: 'bg-white hover:bg-slate-100 text-primary border border-slate-300',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
  success: 'bg-green-600 hover:bg-green-700 text-white',
};

const sizes = {
  sm: 'px-2.5 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      className={`rounded-md shadow font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary
      ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 