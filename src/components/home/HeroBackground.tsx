
import { useState, useEffect } from "react";

interface HeroBackgroundProps {
  mousePosition: { x: number; y: number };
}

const HeroBackground = ({ mousePosition }: HeroBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/0 z-10" />
      
      {/* Vibrant gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-b from-[#8B5CF6]/10 to-transparent -z-10" />
      
      {/* First blob with enhanced colors and stronger effect */}
      <div 
        className="absolute -top-[10vh] -left-[10vw] w-[60vw] h-[60vw] rounded-full bg-gradient-to-r from-[#8B5CF6]/30 to-[#D946EF]/20 blur-3xl transition-transform duration-1000 ease-out"
        style={{ 
          transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)` 
        }}
      />
      
      {/* Second blob with different color and stronger effect */}
      <div 
        className="absolute -top-[5vh] -right-[10vw] w-[50vw] h-[50vw] rounded-full bg-gradient-to-l from-[#F97316]/30 to-[#0EA5E9]/20 blur-3xl transition-transform duration-1000 ease-out"
        style={{ 
          transform: `translate(${mousePosition.x * -50}px, ${mousePosition.y * -40}px)` 
        }}
      />
      
      {/* Additional smaller interactive elements */}
      <div 
        className="absolute bottom-[10vh] left-[10vw] w-[30vw] h-[30vw] rounded-full bg-[#0EA5E9]/10 blur-3xl transition-transform duration-700 ease-out"
        style={{ 
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * -30}px)` 
        }}
      />
      
      <div 
        className="absolute bottom-[15vh] right-[15vw] w-[25vw] h-[25vw] rounded-full bg-[#F97316]/10 blur-3xl transition-transform duration-700 ease-out"
        style={{ 
          transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * 25}px)` 
        }}
      />
      
      {/* Added floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#8B5CF6]/30 floating-animation"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i + 20}
            className="absolute w-3 h-3 rounded-full bg-[#0EA5E9]/20 floating-animation"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBackground;
