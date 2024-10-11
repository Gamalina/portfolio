import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ onClick, children, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`mt-4 text-yellow-500 hover:text-yellow-400 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}