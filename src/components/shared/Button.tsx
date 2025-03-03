
import React, { useRef, useState, useEffect } from "react";
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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [particlesArray, setParticlesArray] = useState<{id: number, x: number, y: number, size: number, color: string}[]>([]);
  
  // Magnetic button effect with enhanced strength
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate distance from center (0-1)
    const distance = Math.sqrt(x * x + y * y);
    const maxDistance = Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2;
    const normalizedDistance = Math.min(distance / maxDistance, 1);
    
    // Scale down the movement as we get further from center
    // Increased magnetStrength from 25 to 40 for more pronounced effect
    const magnetStrength = 40 * (1 - normalizedDistance);
    
    setPosition({
      x: x * magnetStrength / 100,
      y: y * magnetStrength / 100
    });
    
    // Create particles on hover when moving
    if (Math.random() > 0.7) {
      createParticle(e.clientX - rect.left, e.clientY - rect.top);
    }
  };
  
  // Create a particle at the given position
  const createParticle = (x: number, y: number) => {
    // Get vibrant colors from our palette
    const colors = ['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    setParticlesArray(prev => [
      ...prev, 
      {
        id: Date.now() + Math.random(),
        x,
        y,
        size: Math.random() * 6 + 2,
        color: randomColor
      }
    ]);
  };
  
  // Update particles positions and remove old ones
  useEffect(() => {
    if (particlesArray.length === 0) return;
    
    const timeout = setTimeout(() => {
      setParticlesArray(prev => prev.slice(1));
    }, 500);
    
    return () => clearTimeout(timeout);
  }, [particlesArray]);
  
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovering(false);
    setParticlesArray([]);
  };
  
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-out rounded-md overflow-hidden";
  
  const variants = {
    primary: "bg-[#8B5CF6] text-white hover:bg-[#7C3AED]",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/5",
    ghost: "bg-transparent hover:bg-[#8B5CF6]/5 text-[#8B5CF6]",
  };
  
  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

  return (
    <button
      ref={buttonRef}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        "group magnetic-button",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovering ? `translate(${position.x}px, ${position.y}px)` : 'none'
      }}
      {...props}
    >
      {/* Particles effect */}
      {particlesArray.map(particle => (
        <span
          key={particle.id}
          className="absolute rounded-full pointer-events-none animate-float-away"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: 0.7
          }}
        />
      ))}
      
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
        {children}
      </span>
      <span className="absolute inset-0 translate-y-[101%] bg-gradient-to-r from-[#D946EF]/80 to-[#8B5CF6]/80 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
    </button>
  );
};

export default Button;
