import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-[#00c3ff] via-[#4f8efc] to-[#c961de] bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}