
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-primary hover:bg-primary-600 text-white focus:ring-primary-500",
    secondary: "bg-secondary hover:bg-secondary-600 text-white focus:ring-secondary-500",
    outline: "border border-primary text-primary hover:bg-primary-50 focus:ring-primary-500",
    ghost: "text-primary hover:bg-primary-50 focus:ring-primary-500",
    link: "text-primary underline hover:text-primary-700 p-0 focus:ring-0"
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3"
  };
  
  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <Button
      className={cn(
        baseStyles,
        variantStyles[variant],
        variant !== 'link' ? sizeStyles[size] : '',
        widthStyle,
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
