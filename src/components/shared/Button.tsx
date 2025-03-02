
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-out rounded-md overflow-hidden";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-primary text-primary hover:bg-primary/5",
    ghost: "bg-transparent hover:bg-secondary",
  };
  
  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        "group",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
        {children}
      </span>
      <span className="absolute inset-0 translate-y-[101%] bg-foreground/10 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
    </button>
  );
};

export default Button;
