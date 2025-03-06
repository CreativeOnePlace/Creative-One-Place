
import { useState, useEffect } from "react";
import Button from "../shared/Button";
import { ChevronRight } from "lucide-react";

interface HeroContentProps {
  animatedText: string[];
  fullText: string;
}

const HeroContent = ({ animatedText, fullText }: HeroContentProps) => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8 appear-animate">
        <span className="inline-block py-1 px-3 bg-[#8B5CF6]/20 text-[#8B5CF6] rounded-full text-sm font-medium animation-delay-200">
          Creative Design Agency
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight md:leading-tight animation-delay-400 text-glow">
          {animatedText.map((letter, index) => (
            <span 
              key={index} 
              className="inline-block transition-all duration-300"
              style={{ 
                animationDelay: `${index * 0.05}s`,
                opacity: 0,
                transform: 'translateY(20px)',
                animation: `fade-in 0.5s ease-out forwards ${index * 0.05}s`
              }}
            >
              {index === 3 || index === 10 ? (
                <span className="text-[#8B5CF6]">{letter}</span>
              ) : (
                letter
              )}
            </span>
          ))}
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animation-delay-600">
          We create brands that people remember, offering graphic design, web design, social media marketing, and brand strategy solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animation-delay-800">
          <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7C3AED] transition-colors gradient-border" icon={<ChevronRight />}>
            Explore our work
          </Button>
          <Button variant="outline" size="lg" className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/10 transition-colors gradient-border">
            Our services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
